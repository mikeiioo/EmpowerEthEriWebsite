
export type Contact = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  link?: string;
};

export const contacts: Contact[] = [
  {
    id: 1,
    name: "EmpowerEthEri Office",
    role: "Administrative Center",
    bio: "Our headquarters for program coordination, mentorship matching, and general inquiries.",
    imageUrl: "/lovable-uploads/9353e02f-5e51-44e4-b479-8f7b7ccdafb5.png",
  },
  {
    id: 2,
    name: "Instagram",
    role: "Social Media",
    bio: "Follow us on Instagram for updates, stories, and community highlights.",
    imageUrl: "/lovable-uploads/f975921b-bfed-4d89-8701-a154e3d83680.png",
    link: "https://www.instagram.com/empoweretheri/",
  },
  {
    id: 3,
    name: "Facebook",
    role: "Social Network",
    bio: "Connect with us on Facebook for community discussions and event updates.",
    imageUrl: "/lovable-uploads/0e2b043c-24d0-462c-8667-9b3955faa052.png",
    link: "https://www.facebook.com/people/Empower-EthEri/pfbid033jiPoC2cZgH864Ms149QFM9ZogdCQRVNxhBvyKFQofdywWXBHV4pHreihx2962Zml/?mibextid=wwXIfr&rdid=V5YSkRyU231yOb1L&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FckteKjgw%2F%3Fmibextid%3DwwXIfr",
  },
  {
    id: 4,
    name: "LinkedIn",
    role: "Professional Network",
    bio: "Connect with us on LinkedIn for professional networking and career opportunities.",
    imageUrl: "/lovable-uploads/66e74792-c636-441c-b4fc-de6e1527ff36.png",
    link: "https://www.linkedin.com/in/empower-etheri-312769360/",
  },
];
