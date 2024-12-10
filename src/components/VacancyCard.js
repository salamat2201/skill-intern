import React from 'react';
import { Link } from 'react-router-dom';
import './VacancyCard.css';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

function VacancyCard({ id, title, location, salaryStart, salaryEnd, experience, companyName }) {
  return (
    <div className="vacancy-card">
      <div className="vacancy-card-header">
        <img
          src="/placeholder-logo.png"
          alt={`${companyName} logo`}
          className="company-logo"
        />
        <div>
          <h3 className="vacancy-title">{title}</h3>
          <p className="company-name"><FaBuilding /> {companyName}</p>
        </div>
      </div>
      <div className="vacancy-card-body">
        <p className="vacancy-location"><FaMapMarkerAlt /> {location}</p>
        <div className="vacancy-details">
          <p><FaBriefcase />&nbsp; {experience} years</p>
          <p className="vacancy-salary">
            {salaryStart} - {salaryEnd} USD
          </p>
        </div>
      </div>
      <Link to={`/vacancies/${id}`} className="preview-button">Preview ➔</Link>
    </div>
  );
}

export default VacancyCard;