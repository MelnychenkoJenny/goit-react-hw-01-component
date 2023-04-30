import { Container } from './App.styled';
import { Profile } from 'components/Profile';
import userData from '../data/user.json';
import { Statistics } from 'components/Statistics';
import dataStatistics from '../data/data.json';
import {FriendList} from 'components/FriendList';
import friends from '../data/friends.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <Container>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={dataStatistics} />
      <Statistics stats={dataStatistics} />
      <FriendList items={friends}/>
    </Container>
  );
};
