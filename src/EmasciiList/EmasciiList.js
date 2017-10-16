import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/style';

import Emascii from '../Emascii';

const List = styled.div`
  width: 74%;
  margin: 0 13%;
  ${media.handheld`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
  ${media.tablet`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

const Section = styled.div`
`;

const Title = styled.h2`
  margin: 45px 0 15px 13%;
  padding-left: 10px;
  text-align: left;
  color: lawngreen;
  font-weight: normal;
  font-style: italic;
  font-size: 2.2em;
`;

const renderEmascii = (props) => <Emascii key={props.name} {...props} />;

const SearchResults = ({ matched = [], related = [], suggested = [] }) => (
  <div>
    { !!matched.length &&
      <Section>
        <Title>matches</Title>
        <List>
          { matched.map(renderEmascii) }
        </List>
      </Section>
    }
    { !!related.length &&
      <Section>
        <Title>related</Title>
        <List>
          { related.map(renderEmascii) }
        </List>
      </Section>
    }
    { !!suggested.length &&
      <Section>
        <Title>suggestions</Title>
        <List>
          { suggested.map(renderEmascii) }
        </List>
      </Section>
    }
  </div>
);

const AllEmasciis = ({ matched = [] }) => (
  <div>
    <List>
      { matched.map(renderEmascii) }
    </List>
  </div>
);

const EmasciiList = props => {
  if (props.search) {
    return <SearchResults {...props} />;
  } else {
    return <AllEmasciis {...props} />;
  }
};

export default EmasciiList;
