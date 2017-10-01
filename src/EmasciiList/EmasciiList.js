import React from 'react';
import Emascii from '../Emascii';

const EmasciiList = ({ emasciis = [] }) => emasciis.map(
  (props) => <Emascii key={props.name} {...props} />
);

export default EmasciiList;
