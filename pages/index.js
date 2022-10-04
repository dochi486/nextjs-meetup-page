import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: '테스트 밋업',
    image:
      'https://lh3.googleusercontent.com/NHeXUhVPpVhctn2gBZyO8Z1U4Dbm9ahXxPT4Oin6UgjjmS8lhnudjELu-s8ktthJ8HE962wcJ6I-3oWtqZBoTvf_hHI=w2048',
    address: '어딘가, 어디어디',
    description: '첫번째 밋업입니당',
  },
  {
    id: 'm2',
    title: '두번째 밋업',
    image:
      'https://lh3.googleusercontent.com/NHeXUhVPpVhctn2gBZyO8Z1U4Dbm9ahXxPT4Oin6UgjjmS8lhnudjELu-s8ktthJ8HE962wcJ6I-3oWtqZBoTvf_hHI=w2048',
    address: '어딘가, 어디어디',
    description: '두번째 밋업입니당',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:AIAmrRCxdB3kkNiD@cluster0.zgqc2ql.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //데이터 업데이트 빈도에 따라서 설정해주면 되는 숫자
  };
}

export default HomePage;
