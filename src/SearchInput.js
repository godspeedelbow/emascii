import React, { Component } from 'react';

import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #999;
  color: #444;
  font-size: 2em;
  outline: none;
  width: 90%;
`;

class SearchInput extends Component{
  constructor(props = { onChange: console.log }) {
    super(props);
  }
  componentDidMount(){
    this.inputComponent.focus();
  }
  render() {
    return(
        <Input autoCapitalize="none"
          placeholder={'search'}
          onChange={(event) => this.props.onChange(event.target.value)}
          innerRef={(input) => { this.inputComponent = input; }}
        />
    );
  }
}

export default SearchInput;
