export const siteConfig = {
  name: "Transmission",
  handle: "@transmissionprojet",
  categories: ["Histoire", "Musique"],
  contactEmail: "assoepisteme@gmail.com",
  instagramUrl: "https://www.instagram.com/transmissionprojet",
  helloassoUrl: "https://www.helloasso.com/associations/episteme",
};

export const nextEvent = {
  name: "Transmission II",
  date: "2026-03-14T20:00:00",
  location: "River's King, Paris",
  time: "20h00",
  ticketUrl:
    "https://www.helloasso.com/associations/episteme/evenements/transmission-1",
  announced: true,
  ticketOpen: true,
};

export const links = [
  {
    title: "Instagram",
    description: "Suis-nous pour les dernières actus",
    href: "https://www.instagram.com/transmissionprojet",
    icon: "instagram" as const,
    external: true,
  },
  {
    title: "Nos événements passés",
    description: "Revivez les meilleurs moments",
    href: "#events",
    icon: "wine" as const,
    external: false,
  },
  {
    title: "Nous contacter",
    description: "Partenariats, questions, collaborations",
    href: "mailto:contact@asso-episteme.fr",
    icon: "contact" as const,
    external: false,
  },
];

export const pastEvents = [
  { name: "Fête de la Musique", date: "21 juin 2025", emoji: "🎵" },
  { name: "Transmission I", date: "1 février 2025", emoji: "🎵" },
];
