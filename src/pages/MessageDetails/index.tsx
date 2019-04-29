import React, { Component, Context } from "react";
import { Spinner, Container, Media } from "react-bootstrap";

import { CenteredLoading } from "../../components/CenteredLoading";
import { MessageListItemProps } from "../../components/MessageListItem";

export class MessageDetails extends Component<{}, MessageDetailsStates> {
  constructor(props: {}, context: Context<{}>) {
    super(props, context);

    this.state = {
      isLoading: true,
      message: null,
    };
  }
  
  public componentDidMount() {
    
  }

  public render() {
    if(this.state.isLoading) {
      return (
        <CenteredLoading/>
      );
    }

    return (
      <>
        <Container>
          {
            this.state.message ?
            <Media>
              <h2>{this.state.message.title}</h2>
              <h3>{this.state.message.email}</h3>
              <h4>{this.state.message.createdAt}</h4>
              <Media.Body>
                <p>{this.state.message.message}</p>
              </Media.Body>
            </Media> :
            <h1>Error occurred</h1>
          }
        </Container>
      </>
    );
  }
}

export interface MessageDetailsStates {
  readonly isLoading: boolean;
  readonly message: MessageListItemProps | null;
}
