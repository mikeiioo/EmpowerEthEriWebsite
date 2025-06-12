import React from 'react';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const ProfileCard = ({ name, role, bio, imageUrl }: ProfileCardProps) => {
  return (
    <div className="profile-card">
      <div className="flex-shrink-0">
        <img src={imageUrl} alt={name} className="profile-image" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold event-blue">{name}</h3>
        <p className="text-sm font-medium text-gray-500 mb-2">{role}</p>
        <p className="text-gray-700">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;