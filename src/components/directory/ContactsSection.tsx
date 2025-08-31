
import React from "react";
import ProfileCard from "../ProfileCard";
import { contacts } from "../../data/contacts";
import { useLanguage } from "../../context/LanguageContext";

const ContactsSection = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 event-blue">
        {t("directoryContacts")}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {contacts.map((contact) =>
          contact.link ? (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <ProfileCard
                name={contact.name}
                role={contact.role}
                bio={contact.bio}
                imageUrl={contact.imageUrl}
                showSocialIcons={false}
              />
            </a>
          ) : (
            <ProfileCard
              key={contact.id}
              name={contact.name}
              role={contact.role}
              bio={contact.bio}
              imageUrl={contact.imageUrl}
              showSocialIcons={false}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ContactsSection;
