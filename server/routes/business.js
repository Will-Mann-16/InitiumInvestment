const express = require('express');
const router = express.Router();
const { Business } = require('../schema/Business');
const { User } = require('../schema/Users');

router.get("/", (req, res) => {
   switch(req.user.type){
       case "ENTREPRENEUR":
           Business.find({owners: req.user._id}).exec((err, docs) => {
              res.status(err ? 500 : 200).json(err ? err : docs);
           });
           break;
       case "INVESTOR":
           Business.find({}).exec(async (err, docs) => {
               docs = await Promise.all(docs.map(async (doc) => {
                   const owners = await User.find({_id:{ $in: doc.owners}}).select('-password').exec();
                   return {...doc._doc, owners};
               }));
               res.status(err ? 500 : 200).json(err ? err : docs);
           });
           break;
   }
});

router.post("/", (req, res) => {
   if(req.user.type === "ENTREPRENEUR"){
       const newBusiness = new Business({...req.body, owners: [req.user._id]});
       newBusiness.save((err, doc) => {
           res.status(err ? 500 : 200).json(err ? err : doc);
       });
   } else{
       res.status(403).json({message: 'Incorrect User Type'})
   }
});

router.post("/:id", (req, res) => {
    if(req.user.type === "ENTREPRENEUR"){
        Business.count({_id: req.params.id, owners: req.user._id}, (err, count) => {
           if(err) return res.status(500).json(err);
           if(count > 0){
               Business.findByIdAndUpdate(req.params.id, {...req.body}, {new: true},(err, doc) => {
                   res.status(err ? 500 : 200).json(err ? err : doc);
               });
           } else {
               res.status(403).json({message: 'Incorrect User Access'})
           }
        });
    } else{
        res.status(403).json({message: 'Incorrect User Access'})
    }
});
router.delete("/:id", (req, res) => {
    if(req.user.type === "ENTREPRENEUR"){
        Business.count({_id: req.params.id, owners: req.user._id}, (err, count) => {
            if(err) return res.status(500).json(err);
            if(count > 0){
                Business.findByIdAndDelete(req.params.id, (err, doc) => {
                    res.status(err ? 500 : 200).json(err ? err : doc);
                });
            } else {
                res.status(403).json({message: 'Incorrect User Access'})
            }
        });
    } else{
        res.status(403).json({message: 'Incorrect User Access'})
    }
});

module.exports = router;