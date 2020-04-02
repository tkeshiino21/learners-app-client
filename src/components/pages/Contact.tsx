import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Wrap, Input, Label } from '../atoms';

const Contact = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="48px" style={{ minHeight: '72vh' }}>
        <Heading className="h1" color="blue">
          Contact
        </Heading>
        <form action="">
          <Label>Label</Label>
          <Input />
        </form>
      </Wrap>
    </PageLayout>
  );
};

export default Contact;
