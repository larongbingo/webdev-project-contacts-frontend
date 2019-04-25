import React, { FunctionComponent } from "react";

import "./styles.css";

// css-tricks.com/centering-css-complete-guide

export const CenteredDiv: FunctionComponent<CenteredDivProps> = ({children, divWidth, divHeight}) => (
  <div id="centeredDiv-parentDiv">
    <div id="centeredDiv-childDiv" style={{width: `${divWidth}vw`, height: `${divHeight}vh`}}>
      {children}
    </div>
  </div >
);

export interface CenteredDivProps {
  divWidth?: number;
  divHeight?: number;
}
