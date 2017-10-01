import React from 'react';
import styled from 'styled-components';


const Panel = styled.div`
  margin-top: 60px;
`;

const Heading = styled.span`
  background-color: #f3f3f3;
  padding: 20px;
  magin: 10px;
  font-size: 2em;
  border-radius: 20px;
  font-family: "Arial, sans-serif;
`;

const Name = styled.div`
  margin-top: 20px;
  color: grey;
  font-size: 1.2em;
`;

const Emascii = ({ name, emascii }) => (
  <Panel key={name}>
    <Heading>
      {emascii}
    </Heading>
  	<Name>
  		{name}
  	</Name>
  </Panel>
);

export default Emascii;
