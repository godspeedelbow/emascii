import React from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import styled, { keyframes } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const animationDuration = 0.5;

const Panel = styled.div`
  margin: 12px 10px;
  cursor: pointer;
`;

const colorChange = keyframes`
  from { color: white; }
  to { color: #333; }
`;


const Heading = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  font-size: 2em;
  border-radius: 20px;
  font-family: "Arial", sans-serif;

  &:hover {
    background-color: palegreen;
    color: black;
  }

  ${props => props.copied ? `
    animation: ${colorChange} ${animationDuration}s;
  ` : null}
`;

const Name = styled.div`
  margin-top: 20px;
  color: grey;
  font-size: 1.2em;

  ${Panel}:hover & {
		display: none;
	}
`;

const Tip = styled.div`
  display: none;

  margin-top: 20px;
  color: lawngreen;
  font-size: 1.2em;

  ${Panel}:hover & {
    display: block;
  }
`;

const Emascii = ({ name, emascii, copied, onCopy }) => {
  const tip = copied ? 'copied' : 'click to copy';

  return (
    <CopyToClipboard text={emascii} onCopy={onCopy}>
      <Panel>
        <Heading copied={copied}>{emascii}</Heading>
        <Name>{name}</Name>
        <Tip>{tip}</Tip>
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
