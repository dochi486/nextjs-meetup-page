import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

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

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //http 통신
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
