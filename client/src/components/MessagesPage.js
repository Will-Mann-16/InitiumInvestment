import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Flex, Card, Button } from './elements';

class MessagesPage extends Component {
  render() {
      const chat = this.props.match.params.chatID ? this.props.messages.chats.find(e => e._id === this.props.match.params.chatID) : null;
    return (
      <Flex>
        <Card>
            <h2>Chats</h2>
            <Button>New</Button>
        </Card>
        <Card style={{flexGrow: 1}}>
            {!chat ? <><h1 style={{textAlign: 'center'}}>No Chat Selected</h1><h3 style={{textAlign: 'center'}}>Please select a chat to message on</h3></> : <></>}
        </Card>
      </Flex>
    )
  }
}

const mapStateToProps = state => ({messages: state.messages, auth: state.auth});

export default connect(mapStateToProps)(MessagesPage);
