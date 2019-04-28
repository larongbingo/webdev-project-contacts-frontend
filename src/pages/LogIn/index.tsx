import React, { Component, Context, FormEvent, KeyboardEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { ReplaceProps, BsPrefixProps } from "react-bootstrap/helpers";
import { FormControlProps } from "react-bootstrap";

import { logIn } from "../../libs/auth";
import { CenteredDiv } from "../../components/CenteredDiv";
import { AwesomeBackground } from "../../components/AwesomeBackground";

export class LogIn extends Component<{}, LogInStates> {
  constructor(props: {}, context: Context<{}>) {
    super(props, context);
    this.state = {
      username: "",
      password: "",
    };
  }

  private username_OnChange = (e: FormEvent<ReplaceProps<"input", BsPrefixProps<"input"> & FormControlProps>>) => {
    this.setState({username: e.currentTarget.value!});
  }

  private password_OnChange = (e: FormEvent<ReplaceProps<"input", BsPrefixProps<"input"> & FormControlProps>>) => {
    this.setState({password:  e.currentTarget.value!});
  };

  private login_OnClick = () => {
    logIn(this.state.username, this.state.password)
    .then(val => {
      if(val) {
        window.location.href = "/messages";
      }
      else {
        alert("Incorrect credentials");
      }
    })
  };

  public render() {
    return (
      <div style={{position: "relative", height: "100vh"}}>
        <CenteredDiv>
          <Form onKeyPress={(e: KeyboardEvent<HTMLFormElement>) => e.key === "Enter" ? this.login_OnClick : null} style={{backgroundColor: "#999999", padding: "30px", borderRadius: "20px"}}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={this.username_OnChange} type="text" name="username" id="username" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.password_OnChange} type="password" name="password" id="password" />
            </Form.Group>
            <Button onClick={this.login_OnClick} variant="primary">Log In</Button>
          </Form>
        </CenteredDiv>
        <AwesomeBackground/>
      </div>
    );
  }
};

interface LogInStates {
  readonly username: string;
  readonly password: string;
}

