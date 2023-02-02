import PropTypes from 'prop-types';
import { FriendsItem, FriendsStatus, FriendsAvatar, FriendsName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItem>
            <FriendsStatus isOnline={isOnline}></FriendsStatus>
            <FriendsAvatar src={avatar} alt={name} width="48" />
            <FriendsName>{name}</FriendsName>
        </FriendsItem>
    )
};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline : PropTypes.bool.isRequired,
}