
import { Profile } from './Profile/Profile';
import user from './dataBases/user.json'

export const App = () => {
  return (
    <div>
      <Profile
        userName={user.userName}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
