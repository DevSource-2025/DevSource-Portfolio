import React from "react";
import "./memberCard.css";

const MemberCard = ({ name, role, img, link }) => {
  return (
    <div className="member-card">
      <div className="member-img">
        <img src={img} alt={name} />
      </div>

      <h4 className="member-name">{name}</h4>
      <p className="member-role">{role}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="member-btn"
      >
        View Profile ↗
      </a>
    </div>
  );
};

export default MemberCard;
