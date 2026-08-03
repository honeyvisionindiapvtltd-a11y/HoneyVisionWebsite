import nodemailer from "nodemailer";

const createTransporter = async () => {
  const defaultFrom = process.env.EMAIL_FROM || `no-reply@${process.env.FRONTEND_URL?.replace(/^https?:\/\//, "") || "localhost"}`;

  if (process.env.SMTP_HOST) {
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const auth = process.env.SMTP_USER && process.env.SMTP_PASS
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      : undefined;

    const transporter = process.env.SMTP_HOST.includes("gmail.com")
      ? nodemailer.createTransport({
          service: "gmail",
          auth,
        })
      : nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port,
          secure,
          auth,
        });

    return { transporter, from: process.env.EMAIL_FROM || process.env.SMTP_USER || defaultFrom };
  }

  if (process.env.NODE_ENV === "development") {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    return {
      transporter,
      from: process.env.EMAIL_FROM || `Ethereal <${testAccount.user}>`,
      previewAccount: true,
    };
  }

  throw new Error("SMTP configuration is required in production to send email.");
};

const sendEmail = async ({ to, subject, text, html }) => {
  const { transporter, from, previewAccount } = await createTransporter();

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });

  if (previewAccount && nodemailer.getTestMessageUrl) {
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      info.previewUrl = previewUrl;
    }
  }

  return info;
};

export { sendEmail };
export default sendEmail;