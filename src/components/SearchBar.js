import React, { useState } from 'react';
import styled from "styled-components";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <Container>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    </Container>
  );
};

export default SearchBar;
const Container = styled.div`
form{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background:white;
}


input{
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 50%;
  margin-right: 10px;
};

button{
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

  &:hover {
    background-color: #0056b3;
  }
`;