import React, { useState, useEffect } from 'react';
import creditsData from '../data/credits.json';
import CreditCard from './Creditcard'; // Fixed case sensitivity
import SearchBar from './Searchbar'; // Fixed case sensitivity
import './Dashboard.css';

function Dashboard() {
  const [credits, setCredits] = useState([]);
  const [filteredCredits, setFilteredCredits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCredits(creditsData);
    setFilteredCredits(creditsData);
  }, []);

  useEffect(() => {
    const filtered = credits.filter(credit =>
      credit.project_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      credit.vintage.toString().includes(searchTerm)
    );
    setFilteredCredits(filtered);
  }, [searchTerm, credits]);

  return (
    <div className="dashboard">
      <h1>Offset - Frontend Assignment</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="credits-grid">
        {filteredCredits.map(credit => (
          <CreditCard key={credit.unic_id} credit={credit} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;