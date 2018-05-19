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

const Count = styled.span`
  background-color: palegreen;
  float: right;
  position: absolute;
  width: 30px;
  height: 24px;
  padding-top: 6px;
  text-overflow: none;
  border-radius: 15px;
  font-size: 0.9em;
  font-weight: bold;

  ${Panel}:hover & {
    background-color: black;
    color: white;
  }
`;

const Emascii = ({ name, emascii, copied, copyCount, onCopy }) => {
  const tip = copied ? 'copied' : 'click to copy';

  return (
    <CopyToClipboard text={emascii} onCopy={onCopy}>
      <Panel>
        {!!copyCount && <Count>{copyCount}</Count>}
        <Heading copied={copied}>{emascii}</Heading>
        <Name>{name}</Name>
        <Tip>{tip}</Tip>
      </Panel>
    </CopyToClipboard>
  );
};

const EmasciiContainer = compose(
  withState('copied', 'setCopied', false),
  withState('copyCount', 'setCopyCount', 0),
  withHandlers({
    onCopy: ({ setCopied, copyCount, setCopyCount }) => () => {
      setCopied(true);
      setCopyCount(copyCount + 1);
      setTimeout(
        () => setCopied(false),
        animationDuration * 1000
      );
    },
  }),
)(Emascii);

export default EmasciiContainer;
