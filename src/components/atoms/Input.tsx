import styled from '@emotion/styled';

export const Label = styled.label`
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.01071em;
`;

export const Input = styled.input`
  width: 100%;
  &.outlined {
    border: 1px solid black;
    background: white;
    text-indent: 2px;
    border-radius: 4px;
  }
  &.underlined {
    border-bottom: 1px solid black;
  }
`;

export const Textarea = styled.textarea`
  height: 200px;
  width: 100%;
  &.outlined {
    outline: none;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
  }
  &.underlined {
    border-bottom: 1px solid black;
  }
`;

// select
export const SelectWrapper = styled.div`
  position: relative;
  &::before {
    position: absolute;
    top: 0.8em;
    right: 0.8em;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid black;
    z-index: 1;
    pointer-events: none;
  }
`;

type SelectProps = {
  width?: any;
  onChange?: any;
};
export const Select = styled.select<SelectProps>`
  outline: none;
  text-indent: 0.01px;
  text-overflow: '';
  background: none transparent;
  vertical-align: middle;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid black;
  color: black;
  width: ${(props) => props.width || '100%'};
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: white;
  color: black;
`;
