

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList';
import user from './dataBases/user.json';
import data from './dataBases/data.json';
import friends from './dataBases/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />


      
      <FriendList friends={friends} />;
    

            
    </div>
  );
};
