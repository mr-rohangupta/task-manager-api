const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "tushargupta3447@gmail.com",
    subject: "Thanks For Joining..!!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "tushargupta3447@gmail.com",
    subject: "Sorry to see you go..!!",
    text: `Goodbye ${name}. I hope to see you back`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationMail,
};
