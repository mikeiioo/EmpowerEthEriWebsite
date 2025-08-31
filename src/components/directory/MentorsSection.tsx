
import React from "react";
import ProfileCard from "../ProfileCard";
import { mentors } from "../../data/mentors";
import { useLanguage } from "../../context/LanguageContext";

const MentorsSection = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 event-blue">
        {t("directoryMentors")}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {mentors.map((mentor) => (
          <ProfileCard
            key={mentor.id}
            name={mentor.name}
            role={mentor.role}
            bio={mentor.bio}
            imageUrl={mentor.imageUrl}
            showSocialIcons={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MentorsSection;
