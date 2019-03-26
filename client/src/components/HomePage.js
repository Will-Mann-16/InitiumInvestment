import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Navbar, Container, Card, Background} from './elements';


export default class HomePage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Navbar>
                    <div>
                        <h3>Initium</h3>
                    </div>
                    <div>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </div>
                </Navbar>
            <Container>
          <Card>
              <h1>Initium Investment</h1>
          </Card>
                <Card>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacus tortor, commodo porttitor dolor non, elementum varius erat. Curabitur hendrerit viverra metus quis egestas. Proin luctus quam a felis consequat, et ultricies metus sodales. Nunc ullamcorper dictum velit vel maximus. Phasellus molestie efficitur ex, in bibendum arcu iaculis ullamcorper. Vestibulum porta tempor nibh, ut porta ligula vulputate et. Quisque justo urna, accumsan et augue laoreet, dapibus facilisis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut hendrerit nibh eu bibendum aliquam.

                  Donec malesuada lectus sapien, nec vehicula tortor hendrerit non. Sed in purus tempus dui accumsan cursus quis ac erat. Ut ac bibendum ipsum. Pellentesque tempor consectetur tempor. Nunc vel erat eget nisi finibus mollis. Maecenas ut ligula lectus. Morbi suscipit fermentum volutpat. Nulla facilisi. Nulla id risus at nulla lobortis pellentesque. Nunc non massa et quam ornare auctor. Sed tempus dolor nec porttitor sodales. Pellentesque laoreet augue varius justo viverra tincidunt.

                  Curabitur ornare, odio ut ultricies tempor, libero ligula condimentum est, sit amet porttitor ipsum felis sit amet nisl. Nullam tincidunt orci eget facilisis posuere. Vestibulum faucibus cursus urna. Morbi sit amet est ut odio sollicitudin dapibus nec in justo. Donec accumsan blandit felis, eu malesuada orci tristique vitae. Morbi lacinia velit nec nunc scelerisque, sed porttitor erat lobortis. Sed ullamcorper, ipsum in faucibus dignissim, metus justo vulputate metus, fermentum ultrices ligula tellus eu est. Pellentesque sed lacus in mauris accumsan interdum. Mauris tempus erat tortor, sed mollis orci semper id. In faucibus facilisis laoreet. Nunc tempor placerat purus, sed vestibulum leo.

                  In mi elit, auctor ut lacinia pulvinar, convallis vel odio. Pellentesque consectetur augue a nibh aliquet, sed blandit sapien faucibus. Proin ultrices eleifend dolor, at volutpat libero hendrerit at. Duis blandit, leo in pellentesque venenatis, nulla lacus dictum nulla, eget tempor lectus leo sit amet massa. Nullam quis ligula nulla. Nulla porta metus a luctus pulvinar. Vivamus vel velit vel velit pulvinar sollicitudin id nec nisl. Pellentesque pellentesque fringilla justo, vitae rhoncus eros sodales eget. Integer vel nisl eleifend, ullamcorper metus ac, tincidunt sapien. Nam mollis quam a metus venenatis efficitur ac non ipsum. In porta sem augue, porttitor tincidunt enim egestas fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eget erat euismod, dignissim nisl ac, luctus arcu. Suspendisse tincidunt dictum tellus, ut viverra massa vulputate nec.

                  Integer sodales risus quam, tincidunt dignissim urna posuere quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Mauris luctus nulla in velit bibendum sollicitudin. Ut posuere libero nunc, nec elementum massa varius et. Aenean id enim tristique, sagittis massa ut, bibendum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer massa elit, dignissim ut venenatis at, facilisis nec leo. Praesent a facilisis nunc. Nam porta quam sed condimentum pellentesque. In hac habitasse platea dictumst. Aliquam congue purus nec pulvinar convallis. Nulla eleifend gravida tortor vitae rhoncus. Etiam hendrerit rutrum dolor, a tempus dolor ullamcorper nec. Vivamus lacinia condimentum viverra.</p>
          </Card>
            </Container>
                <Background/>
            </React.Fragment>
        );
    }
}
