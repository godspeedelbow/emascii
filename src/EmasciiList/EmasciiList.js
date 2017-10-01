import React from 'react';
import Emascii from '../Emascii';

const EmasciiList = ({ emasciis = [] }) => emasciis.map(
  (props) => <Emascii {...props} />
);

export default EmasciiList;
