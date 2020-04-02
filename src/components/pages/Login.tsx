import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Wrap } from '../atoms';

const Login = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="48px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Login
        </Heading>
      </Wrap>
    </PageLayout>
  );
};

export default Login;
