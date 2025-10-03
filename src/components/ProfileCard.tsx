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
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-white shadow-sm border border-gray-200 transition-all hover:shadow-md">
      {/* Avatar */}
      <div className="flex-shrink-0 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/placeholder.png"; }}
        />
      </div>

      {/* Text / Icons */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold event-blue">{name}</h3>
          {showSocialIcons && (
            <div className="flex gap-2">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label={`${name} LinkedIn`}>
                <Linkedin size={16} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors" aria-label={`${name} Instagram`}>
                <Instagram size={16} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600 transition-colors" aria-label={`${name} Email`}>
                <Mail size={16} />
              </a>
            </div>
          )}
        </div>
        <p className="text-sm font-medium text-gray-500 mb-2">{role}</p>
        {bio && <p className="text-sm text-gray-600">{bio}</p>}
      </div>
    </div>
  );
};

export default ProfileCard;