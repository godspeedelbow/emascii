import React, { Component } from 'react';
import {
  Provider
} from 'rebass'
import EmasciiList from './EmasciiList';
import Header from './Header';
import './App.css';

import styled from 'styled-components';

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
        <div className="App">
          <Header onChange={this.onChange} />
          <EmasciiList search={search} />
        </div>
      </Provider>
    );
  }
}


export default styled(App)``;
