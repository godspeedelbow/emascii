import React from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import styled, { keyframes } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const animationDuration = 0.5;

const Wrapper = styled.div`
  position: relative;
`;

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

  ${Panel}:hover & {
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

const CopyCount = styled.span`
  background-color: palegreen;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 30px;
  height: 24px;
  padding-top: 6px;
  text-overflow: none;
  border-radius: 15px;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;

  ${Wrapper}:hover & {
    background-color: black;
    color: white;
  }
`;

const Counted = styled.span`
  display: block;
  ${CopyCount}:hover & {
    display: none;
  }
`;

const Clear = styled.span`
  display: none;
  font-weight: 100;
  font-size: 19px;
  line-height: 13px;
  ${CopyCount}:hover & {
    display: block;
  }
`;


const Emascii = ({ name, emascii, copied, copyCount, setCopyCount, onCopy }) => {
  const tip = copied ? 'copied' : 'click to copy';

  return (
    <Wrapper>
        {!!copyCount && (
          <CopyCount>
            <Counted>{copyCount}</Counted>
            <Clear onClick={() => setCopyCount(0)}>×</Clear>
          </CopyCount>
        )}
    <CopyToClipboard text={emascii} onCopy={onCopy}>
        <Panel>
          <Heading copied={copied}>{emascii}</Heading>
          <Name>{name}</Name>
          <Tip>{tip}</Tip>
        </Panel>
    </CopyToClipboard>
      </Wrapper>
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
