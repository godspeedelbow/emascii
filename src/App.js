import React, { Component } from 'react';
import EmasciiList from './EmasciiList';
import Header from './Header';

import styled from 'styled-components';

const Centered = styled.div`
  text-align: center;
`;

const Footer = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  color: #aaa;
`;

const Link = styled.a`
	color: lawngreen;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
      <Centered>
        <Header onChange={this.onChange} />
        <EmasciiList search={search} />
        <Footer>created by @godspeedelbow:&nbsp;
          <Link href="https://github.com/godspeedelbow">github</Link>
          &nbsp;/&nbsp;
          <Link href="https://twitter.com/godspeedelbow">twitter</Link>
        </Footer>
      </Centered>
    );
  }
}

export default styled(App)``;
