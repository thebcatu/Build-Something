class Recommender {
    constructor() {
      this.userPreferences = {};
    }
  
    addUserPreferences(user, items) {
      this.userPreferences[user] = new Set(items);
    }
  
    recommend(user) {
      const currentUserItems = this.userPreferences[user];
      const scores = {};
  
      for (let otherUser in this.userPreferences) {
        if (otherUser === user) continue;
        const otherItems = this.userPreferences[otherUser];
  
        otherItems.forEach(item => {
          if (!currentUserItems.has(item)) {
            scores[item] = (scores[item] || 0) + 1;
          }
        });
      }
  
      return Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);
    }
  }
  
  module.exports = Recommender;
  