import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Wrap, Text } from '../atoms';

const Plan = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="24px" mr="48px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Book
        </Heading>
        <Text>学習に役立つ本の情報をお届けします。</Text>
        <section>
          <Text className="content">
            お前の言いたいことが
            <br />
            正しくなるには時間がかかるんだ
            <br />
            その言葉が波を得て届くのにもね
            <br />
            希望の船に乗って言葉を失わず
            <br />
            今日は仕方なく引き返すんだ
            <br />
            そして浜辺に着いた時はもう怖がらずにそれを伝えるのさ
            <br />
            大きく声を張って誇らしく言うんだ
            <br />
            そして踊りたければ踊るんだ
            <br />
            チャンスを掴んでくれ兄弟よ
            <br />
            言葉は勝手に伝わっていくって 知ってるだろ
            <br />
            俺たちがわかってるのはどうなるかわからないってことだけさ
            <br />
            どうなろうとも受け入れてくれ兄弟
            <br />
            これからの未来なんて 知りようもないんだ
            <br />
            それは神のみぞ知る事なんだよ
            <br />
            声を張って誇らしく言うんだ
            <br />
            正しいものを否定はしてない
            <br />
            俺たち次第なんだよ
            <br />
            起きる全ての出来事を最善にするのはね
          </Text>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Plan;
