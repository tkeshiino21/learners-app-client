import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Wrap, Input, Flex, Text, Button } from '../atoms';

const Search = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="48px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Search
        </Heading>
        <Text>共に頑張る仲間を見つけましょう。</Text>
        <div>
          <Wrap mt="32px">
            <Flex>
              <Input style={{ height: '32px', width: '300px' }} />
              <Button style={{ height: '100%', width: '80px' }}>検索</Button>
            </Flex>
          </Wrap>
        </div>
        <section>
          <Wrap mt="32px">
            <Heading className="h4" proximity="0px">
              Goal:日商簿記試験１級
            </Heading>
            <Text>へるすまん＠HealthCare</Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h4" proximity="0px">
              Goal:日商簿記試験１級
            </Heading>
            <Text>へるすまん＠HealthCare</Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h4" proximity="0px">
              Goal:日商簿記試験１級
            </Heading>
            <Text>へるすまん＠HealthCare</Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h4" proximity="0px">
              Goal:日商簿記試験１級
            </Heading>
            <Text>へるすまん＠HealthCare</Text>
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Search;
