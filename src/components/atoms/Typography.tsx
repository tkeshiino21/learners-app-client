import styled from '@emotion/styled';
import ds from '../../theme/theme';

type Heading = {
  color?: string;
  proximity?: string;
  as?: any;
};
export const Heading = styled.h1<Heading>`
  color: ${(props) => props.color};
  &.h1 {
    font-size: 48px;
    line-height: 1;
    margin-bottom: ${(props) => props.proximity || '24px'};
  }

  &.h2 {
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: ${(props) => props.proximity || '24px'};
  }

  &.h3 {
    font-size: 32px;
    line-height: 1.125;
    margin-bottom: ${(props) => props.proximity || '24px'};
  }

  &.h4 {
    font-size: 24px;
    line-height: 1;
    margin-bottom: ${(props) => props.proximity || '24px'};
  }

  &.h5 {
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: ${(props) => props.proximity || '24px'};
  }

  &.h6 {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: ${(props) => props.proximity || '24px'};
  }

  &.primary {
    color: ${ds.brand('main')};
  }
`;

type Text = {
  color?: string;
  proximity?: string;
  as?: any;
};
export const Text = styled.p<Text>`
  color: ${(props) => props.color};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: ${(props) => props.proximity};

  &.content {
    line-height: 1.9;
  }
  &.primary {
    color: ${ds.brand('main')};
  }
`;
