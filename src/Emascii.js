import React from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import styled, { keyframes } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const animationDuration = 1;

const Panel = styled.div`
  margin-top: 60px;
  cursor: pointer;
`;

const colorChange = keyframes`
  from { color: lime; }
  to { color: #333; }
`;

const Heading = styled.span`
  background-color: #f3f3f3;
  padding: 20px;
  magin: 10px;
  font-size: 2em;
  border-radius: 20px;
  font-family: "Arial", sans-serif;
  ${props => props.copied ? `
    animation: ${colorChange} ${animationDuration}s;
  ` : null}
`;

const Name = styled.div`
  margin-top: 20px;
  color: grey;
  font-size: 1.2em;
`;

const Emascii = ({ name, emascii, copied, onCopy }) => {
  return (
    <CopyToClipboard text={emascii} onCopy={onCopy}>
      <Panel>
        <Heading copied={copied}>
          {emascii}
        </Heading>
        <Name>
          {name}
        </Name>
      </Panel>
    </CopyToClipboard>
  );
};

const EmasciiContainer = compose(
  withState('copied', 'setCopied', false),
  withHandlers({
    onCopy: ({ setCopied }) => () => {
      setCopied(true);
      setTimeout(
        () => setCopied(false),
        animationDuration * 1000
      );
    },
  }),
)(Emascii);

export default EmasciiContainer;
