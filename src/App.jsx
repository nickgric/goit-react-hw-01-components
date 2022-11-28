import React from 'react';

import { Section } from './components/Section';
import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import { FriendList } from './components/FriendList';
import { TransactionHistory } from './components/TransactionHistory';

import user from './components/data/user.json';
import data from './components/data/data.json';
import friends from './components/data/friends.json';
import transactions from './components/data/transactions.json';

const { username, tag, location, avatar, stats } = user;
const { followers, likes, views } = stats;

export const App = () => {
  return (
    <Section>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        likes={likes}
        views={views}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Section>
  );
};
