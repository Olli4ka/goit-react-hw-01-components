import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ avatar, userName, tag, location, stats }) => {
    return (
    <div className='profile'>
        <div>
            <img src={avatar} alt={userName} />;
            <p>{userName}</p>;
            <p>{tag}</p>;
            <p>{location}</p>;
        </div>
        <ul>
            <li>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>
    //     <div class="profile">
    //   <div class="description">
    //     <img
    //       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
    //       alt="User avatar"
    //       class="avatar"
    //     />
    //     <p class="name">Petra Marica</p>
    //     <p class="tag">@pmarica</p>
    //     <p class="location">Salvador, Brasil</p>
    //   </div>

    //   <ul class="stats">
    //     <li>
    //       <span class="label">Followers</span>
    //       <span class="quantity">1000</span>
    //     </li>
    //     <li>
    //       <span class="label">Views</span>
    //       <span class="quantity">2000</span>
    //     </li>
    //     <li>
    //       <span class="label">Likes</span>
    //       <span class="quantity">3000</span>
    //     </li>
    //   </ul>
    // </div>
        );
};



Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};