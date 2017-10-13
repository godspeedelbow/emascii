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

const EmasciiList = ({ emasciis = [] }) => (
  <List>
    { emasciis.map((props) => <Emascii key={props.name} {...props} />) }
  </List>
);

export default EmasciiList;
