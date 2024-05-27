require('dotenv').config();
const fetch = require('node-fetch');

const TOKEN = process.env.githubToken;

const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

async function retrieveContributionData(userName) {
  const variables = {
    userName: userName
  };

  const body = {
    query,
    variables
  };

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const parsed = await res.json();
  return parsed;
}

const commitsThisYearPromise = retrieveContributionData('spencerattick')
  .then(commitData => {
    return commitData.data.user.contributionsCollection.contributionCalendar.totalContributions;
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });

module.exports = {
  commitsThisYearPromise
};
