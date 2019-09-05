/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let cardsContainer = document.querySelector('.cards');

function getGithubData(user){
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      cardsContainer.appendChild(cardCreator(response));
    })
    .catch(error => console.log(error));
}



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["domeccleston", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell", "ladrillo"];

followersArray.forEach((person) => getGithubData(person));

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(userData) {

  console.log(userData.data);

  const cardDiv = document.createElement('div');
  cardDiv.classList.add("card");

  const userImg = document.createElement('img');
  userImg.setAttribute("src", userData.data.avatar_url)

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add("name");
  const userName = document.createElement('p');
  userName.classList.add("username")
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userProfileLink = document.createElement('a');
  userProfileLink.setAttribute("href", userData.data.html_url)
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userProfileLink);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  name.textContent = userData.data.name;
  userName.textContent = userData.data.login;
  userLocation.textContent = `Location: ${userData.data.location}`;
  userProfile.textContent = `Profile:`
  userProfileLink.textContent = userData.data.html_url;
  userFollowers.textContent = `Followers: ${userData.data.followers}`;
  userFollowing.textContent = `Following: ${userData.data.following}`;
  userBio.textContent = userData.data.bio;


  console.log(cardDiv);

  return cardDiv;
} 


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
