import { defineConfig } from "tinacms";

export default defineConfig({
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          // ── PERSONAL INFO ──────────────────────────────────────────────
          {
            type: "object",
            name: "personalInfo",
            label: "Personal Information",
            fields: [
              { type: "string", name: "name", label: "Full name" },
              { type: "string", name: "role", label: "Role" },
              { type: "string", name: "roleEn", label: "Role (English)" },
              { type: "string", name: "university", label: "University" },
              { type: "string", name: "location", label: "Location" },
              { type: "string", name: "semester", label: "Semester" },
              { type: "string", name: "years", label: "Years" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "linkedin", label: "LinkedIn URL" },
              { type: "string", name: "github", label: "GitHub URL" },
              { type: "string", name: "portfolioGithub", label: "Portfolio GitHub URL" },
              { type: "string", name: "english", label: "English level" },
              { type: "string", name: "availability", label: "Availability" },
            ],
          },
          // ── HERO CONTENT ───────────────────────────────────────────────
          {
            type: "object",
            name: "heroContent",
            label: "Hero Section",
            fields: [
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "statementPre", label: "Statement (pre)" },
              { type: "string", name: "statementMain", label: "Statement (main)" },
              { type: "string", name: "statementAccent", label: "Statement (accent)" },
              {
                type: "string",
                name: "pitch",
                label: "Pitch text",
                ui: { component: "textarea" },
              },
            ],
          },
          // ── TEST CASES (Hero card) ─────────────────────────────────────
          {
            type: "object",
            name: "testCases",
            label: "Test Cases (Hero card)",
            list: true,
            fields: [
              { type: "string", name: "method", label: "Method name" },
              { type: "string", name: "detail", label: "Detail" },
            ],
          },
          // ── WHY ME CARDS ───────────────────────────────────────────────
          {
            type: "object",
            name: "whyMeCards",
            label: "Why Me Cards",
            list: true,
            fields: [
              { type: "boolean", name: "featured", label: "Featured card" },
              { type: "string", name: "requirement", label: "Requirement (what progile needs)" },
              { type: "string", name: "title", label: "Card title" },
              {
                type: "string",
                name: "body",
                label: "Body text",
                ui: { component: "textarea" },
              },
              { type: "string", name: "stat", label: "Stat" },
              { type: "string", name: "statLabel", label: "Stat label" },
              {
                type: "object",
                name: "beforeAfter",
                label: "Before/After comparison",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "before", label: "Before" },
                  { type: "string", name: "after", label: "After" },
                ],
              },
            ],
          },
          // ── CREDENTIALS ────────────────────────────────────────────────
          {
            type: "object",
            name: "credentials",
            label: "Credentials & Awards",
            list: true,
            fields: [
              {
                type: "string",
                name: "type",
                label: "Type",
                options: ["scholarship", "badge"],
              },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "issuer", label: "Issuer" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "year", label: "Year (optional)" },
            ],
          },
          // ── SKILL GROUPS ───────────────────────────────────────────────
          {
            type: "object",
            name: "skillGroups",
            label: "Skill Groups",
            list: true,
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "sublabel", label: "Sub-label" },
              { type: "string", name: "skills", label: "Skills", list: true },
              {
                type: "string",
                name: "priority",
                label: "Priority",
                options: ["high", "medium", "low"],
              },
            ],
          },
          // ── WORK EXPERIENCE ────────────────────────────────────────────
          {
            type: "object",
            name: "experience",
            label: "Work Experience",
            list: true,
            fields: [
              { type: "string", name: "company", label: "Company (short)" },
              { type: "string", name: "companyFull", label: "Company (full name)" },
              { type: "string", name: "role", label: "Role" },
              { type: "string", name: "period", label: "Period" },
              { type: "string", name: "location", label: "Location" },
              { type: "boolean", name: "current", label: "Current position" },
              {
                type: "string",
                name: "note",
                label: "Honest note (optional)",
                ui: { component: "textarea" },
              },
              { type: "string", name: "bullets", label: "Bullet points", list: true },
              { type: "string", name: "tech", label: "Tech stack", list: true },
            ],
          },
          // ── PROJECTS ───────────────────────────────────────────────────
          {
            type: "object",
            name: "projects",
            label: "Projects",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Project name" },
              { type: "string", name: "description", label: "Short description" },
              {
                type: "string",
                name: "longDescription",
                label: "Long description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "tech", label: "Tech stack", list: true },
              { type: "string", name: "github", label: "GitHub URL" },
              { type: "string", name: "highlight", label: "Highlight" },
              { type: "string", name: "status", label: "Status" },
              { type: "string", name: "statusNote", label: "Status note" },
            ],
          },
        ],
      },
    ],
  },
});
