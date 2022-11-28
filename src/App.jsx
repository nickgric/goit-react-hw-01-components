import React from 'react';

import { Profile } from './components/Profile/Profile';
import { Section } from './components/Section/Section';
import user from './components/data/user.json';

const { username, tag, location, avatar, stats } = user;
const { followers, likes, views } = stats;

export const App = () => {
  return (
    <Section>
      <Profile
        key={tag}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        likes={likes}
        views={views}
      />
    </Section>
  );
};
