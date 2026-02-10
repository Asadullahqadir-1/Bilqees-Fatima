import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { CONTACT_INFO } from "../constants";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

const parseBody = (req: VercelRequest): ContactRequest => {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as ContactRequest;
    } catch (error) {
      console.warn("contact API: unable to parse string body", error);
      return {};
    }
  }

  return (req.body ?? {}) as ContactRequest;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("contact API: missing Resend configuration");
    return res.status(500).json({ error: "Email service is not configured" });
  }

  const body = parseBody(req);
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subjectRaw = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  const subject = subjectRaw || `Portfolio Inquiry from ${name}`;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromEmail,
      to: CONTACT_INFO.email,
      reply_to: email,
      subject,
      text: formatEmailText({ name, email, message }),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("contact API: failed to send message", error);
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
}

type EmailTemplateContext = {
  name: string;
  email: string;
  message: string;
};

const formatEmailText = ({ name, email, message }: EmailTemplateContext) => {
  return [
    `New portfolio contact request`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");
};
