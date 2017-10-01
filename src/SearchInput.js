import React, { Component } from 'react';

import {
  Box,
  Flex,
} from 'rebass'

import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 2em;
outline: none;
`;

class SearchInput extends Component{
  constructor(props = { onChange: console.log }) {
    super(props);
  }
  componentDidMount(){
    console.log(this.inputComponent)
    this.inputComponent.focus();
  }
  render() {
    return(
      <Flex align='center' justify='center'>
        <Box px={2} py={2} width={1/3}>
          <Input autoCapitalize="none"
            placeholder={'search'}
            onChange={(event) => this.props.onChange(event.target.value)}
            innerRef={(input) => {console.log('ref', input); this.inputComponent = input;}}
          />
    	   </Box>
      </Flex>
    );
  }
}

export default SearchInput;
