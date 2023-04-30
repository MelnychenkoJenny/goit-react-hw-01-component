import PropTypes from 'prop-types';
import {FriendListItem, Name, Status} from './FriendItem.styled'

export const FriendItem = ({name, avatar, isOnline}) => {
  return (
    <FriendListItem>
      <Status></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendListItem>
  );
};

FriendItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}