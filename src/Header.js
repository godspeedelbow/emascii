import React from 'react';

import SearchInput from './search-input';

import styled from 'styled-components';

const Title = styled.h1`
  margin-bottom: 0;
  color: #444;
`;
const Tagline = styled.h3`
  color: #999;
  margin-top: 0;
  font-weight: normal;
  color: lawngreen;
`;
const Header = ({ onChange }) => (
  <div>
    <Title>emasciiiii, hai</Title>
    <Tagline>click to copy to clipboard</Tagline>
    <SearchInput onChange={onChange} />
  </div>
);

export default Header;
