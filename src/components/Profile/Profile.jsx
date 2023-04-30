import PropTypes from 'prop-types';
import {
  ProfileCard,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Avatar src={avatar} alt="User avatar" />
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
  //   stats: PropTypes.exact({
  //     followers: PropTypes.number.isRequired,
  //     views: PropTypes.number.isRequired,
  //     likes: PropTypes.number.isRequired,
  //   }).isRequired,
};
