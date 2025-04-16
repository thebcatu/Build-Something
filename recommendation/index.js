const Recommender = require('./recommender');

const recommender = new Recommender();
recommender.addUserPreferences('user1', ['apple', 'banana' ]);
recommender.addUserPreferences('user2', ['apple', 'carrot']);
recommender.addUserPreferences('user3', ['banana', 'carrot']);
recommender.addUserPreferences('user4', ['carrot',]);

const recommendations = recommender.recommend('user4');
console.log(recommendations); // ['carrot']
