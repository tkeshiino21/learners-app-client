import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Wrap, Image, Paper, Text } from '../atoms';
import pic1 from '../../images/pic1.jpg';

const Tips = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Tips
        </Heading>
        <Text>
          最新科学のデータに基づいた効率的な学習の方法をお届けします。
        </Text>
        <section>
          <Wrap mt="32px">
            <Paper className="shadow">
              <Image className="fit" src={pic1} />
              <Wrap m="24px">
                <Heading className="h4">運動が脳に与える影響とは？</Heading>
                <Text>運動をして学習を加速させよう...</Text>
              </Wrap>
            </Paper>
          </Wrap>
          <Wrap mt="62px">
            <Paper className="shadow">
              <Image className="fit" src={pic1} />
              <Wrap m="24px">
                <Heading className="h4" proximity="0px">
                  運動が脳に与える影響とは？
                </Heading>
                <Text>運動をして学習を加速させよう...</Text>
              </Wrap>
            </Paper>
          </Wrap>
          <Wrap mt="62px">
            <Paper className="shadow">
              <Image className="fit" src={pic1} />
              <Wrap m="24px">
                <Heading className="h4" proximity="0px">
                  運動が脳に与える影響とは？
                </Heading>
                <Text>運動をして学習を加速させよう...</Text>
              </Wrap>
            </Paper>
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Tips;
