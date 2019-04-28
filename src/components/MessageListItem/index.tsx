import React, { FunctionComponent } from "react";

export const MessageListItem: FunctionComponent<MessageListItemProps> = ({id, title, message, email, createdAt, isRead}) => (
  <tr style={{backgroundColor: isRead ? "#999999" : "#FFFFFF"}}>
    <a href={`/messages/${id}`}>
      <td>{createdAt}</td>
      <td>{email}</td>
      <td>{title}</td>
      <td>{message}</td>
    </a>
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
