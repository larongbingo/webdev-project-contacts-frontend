import { getBearerToken } from "./auth";
import { MESSAGE_ROUTES } from "../endpoints";

export async function getMessageDetails(messageId: string) {
  const res = await fetch(
    MESSAGE_ROUTES.getMessageDetails.route(messageId),
    {
      headers: {
        "Authorization": getBearerToken(),
      },
      method: MESSAGE_ROUTES.getMessageDetails.method,
    },
  );
  return res.json();
}

export async function getMessages() {
  const res = await fetch(
    MESSAGE_ROUTES.getAllMessage.route,
    {
      headers: {
        "Authorization": getBearerToken(),
      },
      method: MESSAGE_ROUTES.getAllMessage.method,
    }
  );

  return res.json();
}
