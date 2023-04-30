import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import {FriendsList} from './FriendList.styled'

export const FriendList = ({ items }) => {
  return (
    <FriendsList>
      {items.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
