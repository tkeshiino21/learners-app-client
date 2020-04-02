import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Wrap } from '../atoms';

const Signup = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="24px" mr="48px" style={{ minHeight: '72vh' }}>
        <Heading className="h1" color="blue">
          SignUp
        </Heading>
      </Wrap>
    </PageLayout>
  );
};

export default Signup;
