import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://lh3.googleusercontent.com/NHeXUhVPpVhctn2gBZyO8Z1U4Dbm9ahXxPT4Oin6UgjjmS8lhnudjELu-s8ktthJ8HE962wcJ6I-3oWtqZBoTvf_hHI=w2048"
      title="첫 테스트 밋업"
      address="어디,어디어디"
      description="첫번째 테스트 밋업입니다."
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://lh3.googleusercontent.com/NHeXUhVPpVhctn2gBZyO8Z1U4Dbm9ahXxPT4Oin6UgjjmS8lhnudjELu-s8ktthJ8HE962wcJ6I-3oWtqZBoTvf_hHI=w2048',
        id: meetupId,
        title: '첫 테스트 밋업',
        address: '어디,어디어디',
        description: '첫번째 테스트 밋업입니다.',
      },
    },
  };
}

export default MeetupDetails;
