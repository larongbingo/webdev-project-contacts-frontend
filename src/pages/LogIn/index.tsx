import React from "react";
import { Form, Button } from "react-bootstrap";

import { CenteredDiv } from "../../components/CenteredDiv";
import { AwesomeBackground } from "../../components/AwesomeBackground";

export const LogIn = () => (
  <div style={{position: "relative", height: "100vh"}}>
    <CenteredDiv divHeight={50} divWidth={25}>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" id="username" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" id="password" />
        </Form.Group>
        <Button variant="primary">Log In</Button>
      </Form>
    </CenteredDiv>
    <AwesomeBackground/>
  </div>
);
