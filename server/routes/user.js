const express = require("express");
const router = express.Router();
const { User } = require('../schema/Users');
const { Chat } = require('../schema/Chats');

router.get("/", (req, res) => {
   res.status(200).json(req.user);
});
router.post('/', (req, res) => {
   User.findByIdAndUpdate(req.user._id, {bio: req.body.bio, firstname: req.body.firstname, surname: req.body.surname, email: req.body.email}, {new: true},(err, doc) => {
      res.status(err ? 500 : 200).json(err ? err : doc);
   });
});

router.get('/messages', (req, res) => {
   Chat.find({members: req.user._id}, async (err, chats) => {
      if(err) return res.status(500).json(err);
      try{
      chats = await Promise.all(chats.map(async chat => {
         const members = await User.find({$in: members}).exec();
         const messages = (await Promise.all(messages.map(async message => {
            const sender = await User.findById(message.sender).exec();
            return {...message._doc, sender};
         }))).sort((a, b) => {
            if(a.timestamp < b.timestamp) return -1;
            if(b.timestamp > a.timestamp) return 1;
            return 0;
         });
         return {...chat._doc, members, messages};
      }));
         res.status(200).json(chats);
      } catch(e){
         console.error(e);
         res.status(500).json(e);
      }  
   });
});

router.post('/messages', (req, res) => {
   Chat.create({...req.body}, (err, doc) => {
      res.status(err ? 500 : 200).json(err ? err : doc);
   });
});

router.post('/messages/:chatID', (req, res) => {
   Chat.findByIdAndUpdate(req.params.chatID, {...req.body}, (err, doc) => {
      res.status(err ? 500 : 200).json(err ? err : doc);
   });
});

router.post('/messages/:chatID/message', (req, res) => {
   Chat.findByIdAndUpdate(req.params.chatID, {$push: {messages: {...req.body}}}, (err, doc) => {
      res.status(err ? 500 : 200).json(err ? err : doc);
   });
});

router.post('/messages/:chatID/member/:memberID', async (req, res) => {
   if((await Chat.findById(req.params.chatID)).members.find(e => e === req.params.memberID)){
      Chat.findByIdAndUpdate(req.params.chatID, {$pull: {members: req.params.memberID}}, (err, doc) => {
         res.status(err ? 500 : 200).json(err ? err : doc);
      });
   } else {
      Chat.findByIdAndUpdate(req.params.chatID, {$push: {members: req.params.memberID}}, (err, doc) => {
         res.status(err ? 500 : 200).json(err ? err : doc);
      });
   }
});

router.post('/connections/:userID', (req, res) => {
   if(req.user.connections.find(e => e === req.params.userID)){
      User.findByIdAndUpdate(req.user._id, {$pull: {connections: req.params.userID}}, (err, doc) => {
         res.status(err ? 500 : 200).json(err ? err : doc);
      });
   } else {
      User.findByIdAndUpdate(req.user._id, {$push: {connections: req.params.userID}}, (err, doc) => {
         res.status(err ? 500 : 200).json(err ? err : doc);
      });
   }
});


module.exports = router;