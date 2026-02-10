import { Job, Education, SkillCategory, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: "fbilqees299@gmail.com",
  phone: "03161850978",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/" // Placeholder as specific URL was not provided in resume
};

// Format: https://wa.me/<number> where number is in international format without + or dashes
// Pakistan code is 92, removing leading 0 from 0316... becomes 316...
export const WHATSAPP_URL = "https://wa.me/923161850978";
export const PHONE_LINK = "tel:+923161850978";

export const SUMMARY = `Virtual Assistant and Digital Marketing Specialist with hands-on experience supporting US-based clients across LinkedIn marketing, email campaigns, CRM management, and administrative operations. I have worked extensively with startups, IT companies, healthcare platforms, and venture capital firms, managing lead generation, outreach automation, data organization, and client communications.

My strengths lie in combining marketing execution with operational support, from LinkedIn lead generation and email marketing to CRM handling (HubSpot, Apollo, Airtable) and workflow management. I am highly organized, detail-oriented, and comfortable working in US time zones while supporting fast-paced remote teams.`;

export const EXPERIENCE: Job[] = [
  {
    id: "1",
    title: "Virtual Assistant (Remote)",
    company: "Lever VC",
    url: "https://www.levervc.com/",
    period: "Feb 2024 – Present",
    location: "Remote",
    description: [
      "Provided administrative and operational support to the investment team.",
      "Managed data and workflows using Airtable.",
      "Conducted research and maintained lead/investor databases using Apollo.",
      "Supported LinkedIn-based outreach and communication.",
      "Assisted with scheduling, documentation, and internal coordination."
    ]
  },
  {
    id: "2",
    title: "LinkedIn Outreach and Email Marketing Specialist",
    company: "Software Pro Digital",
    url: "https://softwareprodigital.com/",
    period: "Sep 2024 – Present",
    location: "Remote",
    description: [
      "Led LinkedIn lead generation campaigns using Sales Navigator and automation tools.",
      "Managed email marketing campaigns and CRM workflows using HubSpot.",
      "Handled lead segmentation, pipeline updates, and contact management in CRM.",
      "Coordinated LinkedIn outreach with email follow-ups for higher engagement.",
      "Analyzed campaign performance and optimized messaging for better results."
    ]
  },
  {
    id: "3",
    title: "LinkedIn Outreach Specialist (Remote)",
    company: "Breez Health",
    url: "https://breezhealth.com/",
    period: "March 2023 – March 2024",
    location: "Remote",
    description: [
      "Executed LinkedIn outreach campaigns targeting US healthcare professionals.",
      "Managed lead lists, follow-ups, and response tracking.",
      "Ensured consistent communication and lead nurturing.",
      "Supported outreach reporting and performance tracking."
    ]
  },
  {
    id: "4",
    title: "LinkedIn Outreach Specialist (Remote)",
    company: "Patient Connect",
    url: "https://pcmcc.com/",
    period: "Previous Role",
    location: "Remote",
    description: [
      "Managed LinkedIn marketing and outreach for healthcare-focused audiences.",
      "Built and optimized LinkedIn connection and messaging strategies.",
      "Supported brand visibility and engagement through consistent LinkedIn activity.",
      "Assisted with lead qualification and communication tracking."
    ]
  },
  {
    id: "5",
    title: "Virtual Assistant & LinkedIn Operations Support (Remote)",
    company: "Ninja IT Solutions",
    url: "https://ninjaitsolutions.com/",
    period: "Previous Role",
    location: "Remote",
    description: [
      "Managed LinkedIn lead generation campaigns targeting US-based prospects.",
      "Executed personalized LinkedIn outreach and follow-up sequences.",
      "Supported email marketing activities aligned with LinkedIn campaigns.",
      "Maintained lead databases and tracked responses to improve conversion rates.",
      "Assisted with daily virtual assistant tasks related to outreach and reporting."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "University of the Punjab",
    degree: "Bachelor of Commerce",
    period: "2018 - 2022"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Administrative & Operations",
    skills: ["Virtual Assistance", "Admin Support", "Calendar Management", "Workflow Management", "Data Management", "Research"]
  },
  {
    category: "Marketing & Outreach",
    skills: ["LinkedIn Lead Generation", "Outreach Automation", "Email Marketing", "Cold Outreach", "US Client Communication"]
  },
  {
    category: "Tools & CRM",
    skills: ["HubSpot", "Airtable", "Apollo", "LinkedIn Sales Navigator", "Microsoft Office Suite", "Google Workspace"]
  }
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant for Bilqees Fatima's professional portfolio. 
Your goal is to answer questions about Bilqees based strictly on her resume data.
Be professional, concise, and helpful. 

Here is her resume context:
Name: Bilqees Fatima
Role: Virtual Assistant | Digital Marketer
Email: ${CONTACT_INFO.email}
Phone: ${CONTACT_INFO.phone}
Location: ${CONTACT_INFO.location}

Summary: ${SUMMARY}

Experience:
${EXPERIENCE.map(job => `- ${job.title} at ${job.company} (${job.period}): ${job.description.join('. ')}`).join('\n')}

Education:
${EDUCATION.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.period})`).join('\n')}

Skills:
${SKILLS.map(cat => `${cat.category}: ${cat.skills.join(', ')}`).join('\n')}

If asked about something not in this data, clearly state that you don't have that information.
Always refer to Bilqees in the third person or as "Bilqees".`;