import React from 'react';

import SearchInput from './SearchInput'

const Header = ({ onChange }) => (
  <div>
    <h1 className="App-title">Emasciiiii, hai!</h1>
    <SearchInput onChange={onChange} />
  </div>
);

export default Header;
