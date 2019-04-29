import React, { FunctionComponent } from "react";

export const MessageListItem: FunctionComponent<MessageListItemProps> = ({id, title, message, email, createdAt, isRead}) => (
  <tr onClick={() => window.location.href = `/messages/${id}`} style={{backgroundColor: isRead ? "#999999" : "#FFFFFF", cursor: "pointer"}}>
    <td>{createdAt}</td>
    <td>{email}</td>
    <td>{title}</td>
    <td>{message}</td>
  </tr>
);

export interface MessageListItemProps {
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly email: string;
  readonly createdAt: string;
  readonly isRead: string;
}
