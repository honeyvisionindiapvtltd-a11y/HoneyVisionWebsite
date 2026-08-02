import Contact from "../models/Contact.js";
import Notification from "../models/Notification.js";
import { sendEmail } from "../utils/email.js";

export const submitContact = async (req, res, next) => {
  try {
    const { fullName, email, phone, company, message } = req.body;

    const contact = await Contact.create({
      fullName,
      email,
      phone: phone || "",
      company: company || "",
      message,
    });

    await Notification.create({
      title: `New contact request from ${fullName}`,
      message: `${message}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}${company ? `\nCompany: ${company}` : ""}`,
      audience: "admins",
    });

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been sent. We will get back to you soon.",
      contact: {
        id: contact._id,
        fullName: contact.fullName,
        email: contact.email,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);

    res.json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    next(error);
  }
};

export const replyContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);

    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact message not found." });
    }

    const adminReply = req.body.message || `Hello ${contact.fullName},\n\nThank you for contacting Honey Vision India Pvt Ltd. We have received your message and will respond shortly.\n\nBest regards,\nHoney Vision India Pvt Ltd`;

    await sendEmail({
      to: contact.email,
      subject: `Re: Your inquiry to Honey Vision India Pvt Ltd`,
      text: adminReply,
      html: `<p>${adminReply.replace(/\n/g, "<br />")}</p>`,
    });

    contact.status = "replied";
    await contact.save();

    res.json({ success: true, message: "Reply sent successfully." });
  } catch (error) {
    next(error);
  }
};
