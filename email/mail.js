import * as MailComposer from "expo-mail-composer";
export const SendCreateEmail = (name, to) => {
  return sendEmail(
    "Profile Notification #Created",
    `Greeting ${name}, we are glad to inform you that your staff profile has been created.`,
    [to]
  );
};

export const SendUpdateEmail = (name, to) => {
  return sendEmail(
    "Profile Notification #Edited ",
    `Greeting ${name}, we are glad to inform you that your staff profile has been updated.`,
    [to]
  );
};

export const SendDeleteEmail = (name, to) => {
  return sendEmail(
    "Profile Notification #Deleted",
    `Greeting ${name}, we are sad to inform you that your staff profile has been deleted.`,
    [to]
  );
};
export async function sendEmail(subject, body, to) {
  console.log("mail");
  return MailComposer.composeAsync({
    recipients: to,
    subject,
    body,
    isHtml: false,
    attachments: [],
    from: "gikundaeddah@gmail.com",
    host: "mail.smtpbucket.com",
    port: 8025,
  });
}
