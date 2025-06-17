
import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  showSocialIcons?: boolean;
};

const ProfileCard = ({ name, role, bio, imageUrl, showSocialIcons = false }: ProfileCardProps) => {
  // Detect which contact this is for special styling
  const n = name.toLowerCase();
  const isInstagram = n === "instagram";
  const isLinkedIn = n === "linkedin";
  const isFacebook = n === "facebook";

  let imageClass =
    "w-full md:w-40 h-40 rounded-md object-contain bg-gray-50";
  let inlineStyle = undefined;

  if (isInstagram || isLinkedIn) {
    // Vibrant cropping for Instagram and LinkedIn
    imageClass =
      "w-24 h-24 md:w-28 md:h-28 rounded-md object-cover bg-gradient-to-br from-pink-500 via-yellow-400 to-purple-600";
    inlineStyle = { background: 'none' };
  } else if (isFacebook) {
    // Show as circle for Facebook (matches its round logo)
    imageClass = "w-24 h-24 md:w-28 md:h-28 rounded-full object-cover bg-white";
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-white shadow-sm border border-gray-200 transition-all hover:shadow-md">
      <div className="flex-shrink-0 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className={imageClass}
          style={inlineStyle}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold event-blue">{name}</h3>
          {showSocialIcons && (
            <div className="flex gap-2">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label={`${name} LinkedIn`}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                aria-label={`${name} Instagram`}
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label={`${name} Email`}
              >
                <Mail size={16} />
              </a>
            </div>
          )}
        </div>
        <p className="text-sm font-medium text-gray-500 mb-2">{role}</p>
        {bio && (
          <p className="text-sm text-gray-600">{bio}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

