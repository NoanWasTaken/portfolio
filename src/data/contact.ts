export type ContactIcon = "mail" | "linkedin" | "github";

export interface Contact {
  icon: ContactIcon;
  label: string;
  value: string;
  href: string;
}

export const contacts: Contact[] = [
  {
    icon: "mail",
    label: "Email",
    value: "delatouchenoan@gmail.com",
    href: "mailto:delatouchenoan@gmail.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "noan-delatouche",
    href: "https://www.linkedin.com/in/noan-delatouche/",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "NoanWasTaken",
    href: "https://github.com/NoanWasTaken",
  },
];
