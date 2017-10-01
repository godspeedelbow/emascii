import React, { Component } from 'react';
import {
  Provider
} from 'rebass'
import EmasciiList from './EmasciiList';
import Header from './Header';

import styled from 'styled-components';

const Centered = styled.div`
  text-align: center;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(val) {
    this.setState({ search: val });
  }
  render() {
    const { search } = this.state;

    return (
      <Provider>
        <Centered>
          <Header onChange={this.onChange} />
          <EmasciiList search={search} />
        </Centered>
      </Provider>
    );
  }
}


export default styled(App)``;
