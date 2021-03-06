import React, { Component, Context } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Spinner, Container, Media } from "react-bootstrap";

import { CenteredLoading } from "../../components/CenteredLoading";
import { MessageListItemProps } from "../../components/MessageListItem";
import { getMessageDetails } from "../../libs/messages";

export class MessageDetails extends Component<RouteComponentProps<{messageId: string}>, MessageDetailsStates> {
  constructor(props: RouteComponentProps<{messageId: string}>, context: Context<{}>) {
    super(props, context);

    this.state = {
      isLoading: true,
      message: null,
    };
  }
  
  public componentDidMount() {
    getMessageDetails(this.props.match.params.messageId)
    .then((message => this.setState({message, isLoading: false})));
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
              <div>
                <h2>{this.state.message.title}</h2>
                <h3>{this.state.message.email}</h3>
                <h4>{this.state.message.createdAt}</h4>
              </div>
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
