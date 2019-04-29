import React, { Component, Context } from "react";
import { Spinner, Container, Table } from "react-bootstrap";

import { getMessages } from "../../libs/messages";
import { CenteredDiv } from "../../components/CenteredDiv";
import { MessageListItemProps, MessageListItem } from "../../components/MessageListItem";

export class Messages extends Component<{}, MessagesStates> {
  constructor(props: {}, context: Context<{}>) {
    super(props, context);
    this.state = {
      isLoading: true,
      messages: null,
    };
  }

  public componentDidMount() {
    getMessages()
    .then((messages: MessageListItemProps[]) => this.setState({messages, isLoading: false}));
  }
  
  public render() {
    if(this.state.isLoading) {
      return (
        <CenteredDiv/>
      );
    }

    return (
      <Container>
        <Table bordered hover>
          <thead>
            <tr>
              <td>Date Recieved</td>
              <td>Email</td>
              <td>Title</td>
              <td>Message</td>
            </tr>
          </thead>
          {
            this.state.messages ? 
            <tbody>
              {
                this.state.messages
                .map(
                  (message) => 
                    <MessageListItem 
                      title={message.title} 
                      message={message.message}
                      email={message.email}
                      createdAt={message.createdAt}
                      id={message.id}
                      isRead={message.isRead}
                    />
                )
              }
            </tbody> :
            null
          }
        </Table>
      </Container>
    );
  }
}

export interface MessagesStates {
  readonly messages: MessageListItemProps[] | null;
  readonly isLoading: boolean;
}
