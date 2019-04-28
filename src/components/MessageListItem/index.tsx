import React, { FunctionComponent } from "react";

export const MessageListItem: FunctionComponent<MessageListItemProps> = ({title, message, email, createdAt}) => (
  <tr>
    <td>{createdAt}</td>
    <td>{email}</td>
    <td>{title}</td>
    <td>{message}</td>
  </tr>
);

export interface MessageListItemProps {
  readonly title: string;
  readonly message: string;
  readonly email: string;
  readonly createdAt: string;
}
