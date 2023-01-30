import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import { ProfileCard, DescribtionCard, ProfileAvatar, ProfileName, ProfileInfo, ProfileStats, ProfileLabel, ProfileQuantity } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
    return (
    <ProfileCard>
        <DescribtionCard>
            <ProfileAvatar src={avatar} alt={username}/>
            <ProfileName>{username}</ProfileName>
            <ProfileInfo>@{tag}</ProfileInfo>
            <ProfileInfo>{location}</ProfileInfo>
        </DescribtionCard>
        <ProfileStats>
            <li>
                <ProfileLabel>Followers</ProfileLabel>
                <ProfileQuantity>{stats.followers}</ProfileQuantity>
            </li>
            <li>
                <ProfileLabel>Views</ProfileLabel>
                <ProfileQuantity>{stats.views}</ProfileQuantity>
            </li>
            <li>
                <ProfileLabel>Likes</ProfileLabel>
                <ProfileQuantity>{stats.likes}</ProfileQuantity>
            </li>
        </ProfileStats>
    </ProfileCard>
        );
};



Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};