import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Flex, Wrap, Image, Text } from '../atoms';
import pic1 from '../../images/pic1.jpg';

const Event = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Event
        </Heading>
        <Text>
          LearnesAppに登録されているイベントを一覧から探すことができます。
        </Text>
        <section>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <Heading className="h4">とあるイベント</Heading>
                <Text>
                  2019年4月１日 <br /> 新宿もくもく会 <br />
                  @新宿
                </Text>
              </div>
            </Flex>
          </Wrap>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <Heading className="h4">とあるイベント</Heading>
                <Text>2019年4月１日</Text>
                <Text>新宿もくもく会</Text>
              </div>
            </Flex>
          </Wrap>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <Heading className="h4">とあるイベント</Heading>
                <Text>2019年4月１日</Text>
                <Text>新宿もくもく会</Text>
              </div>
            </Flex>
          </Wrap>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <Heading className="h4">とあるイベント</Heading>
                <Text>2019年4月１日</Text>
                <Text>新宿もくもく会</Text>
              </div>
            </Flex>
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Event;
