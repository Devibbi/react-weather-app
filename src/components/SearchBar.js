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
    <div className='center1'>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    </div>
    </Container>
  );
};

export default SearchBar;
const Container = styled.div`
.center1 {
width:75%;
margin:0 auto;
}

form{
  display: flex;
  margin-bottom: 20px;
  background:white;
  width:100%;
  padding: 10px;
  border-radius: 10px;
}


input{
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 80%;
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
  width:20%;
}

  &:hover {
    background-color: #0056b3;
  }
`;