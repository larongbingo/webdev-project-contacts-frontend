import React, { FunctionComponent } from "react";
import { Spinner } from "react-bootstrap";

import { CenteredDiv } from "../CenteredDiv";

export const CenteredLoading: FunctionComponent = () => (
  <div style={{position: "relative", height: "100vh"}}>
    <CenteredDiv>
      <Spinner animation="border" />
    </CenteredDiv>
  </div>
);
