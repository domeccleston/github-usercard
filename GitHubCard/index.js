
// functions

function getGithubData(user){
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      cardsContainer.appendChild(cardCreator(response.data));
    })
    .catch(error => console.log(error));

}

function getGithubFollowersData(user){
  axios.get(`https://api.github.com/users/${user}/followers`)
  .then(response => {
    response.data.forEach((follower) => getGithubData(follower.login));
  })
  .catch(error => console.log(error));

}

function cardCreator(userData) {

  const cardDiv = document.createElement('div');
  cardDiv.classList.add("card");

  const userImg = document.createElement('img');
  userImg.setAttribute("src", userData.avatar_url)

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add("name");
  const userName = document.createElement('p');
  userName.classList.add("username")
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userProfileLink = document.createElement('a');
  userProfileLink.setAttribute("href", userData.html_url)
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);


  userProfile.appendChild(userProfileLink);


  name.textContent = userData.name;
  userName.textContent = userData.login;
  userLocation.textContent = userData.location === null ? "" : `Location: ${userData.location}`;
  userProfile.textContent = `Profile: ${userProfileLink}`;
  userProfileLink.textContent = userData.html_url;
  userFollowers.textContent = `Followers: ${userData.followers}`;
  userFollowing.textContent = `Following: ${userData.following}`;
  userBio.textContent = userData.bio;

  return cardDiv;
} 

// DOM selectors and events listeners

const cardsContainer = document.querySelector('.cards');

// run functions

getGithubData("domeccleston")
getGithubFollowersData("domeccleston")