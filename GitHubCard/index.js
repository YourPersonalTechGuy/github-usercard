import axios from "axios"
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/YourPersonalTechGuy")
.then((res) => {
  console.log(res.data);
  cardCreator(res.data);
})
.catch((err) => {
  console.log(err);
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["radelmann", "bbalaran", "TheeSweeney", "vanleuvenze", "kartikvempati"];

followersArray.forEach((item) => {
  axios.get(`https://api.github.com/users/${item}`)
    .then((res) => {
      cardCreator(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
})




/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function cardCreator(obj){
  let container = document.createElement("div");
  container.classList = "card";
  let pfp = document.createElement("img");
  let infoContainer = document.createElement("div");
  infoContainer.classList = "card-info";
  let name = document.createElement("h3");
  name.classList = "name";
  let username = document.createElement("p");
  username.classList = "username";
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let profileLink = document.createElement("a");
  let followersCount = document.createElement("p");
  let followingCount = document.createElement("p");
  let bio = document.createElement("p");

  infoContainer.appendChild(name);
  infoContainer.appendChild(username);
  infoContainer.appendChild(location);
  infoContainer.appendChild(profile);
  infoContainer.appendChild(followersCount);
  infoContainer.appendChild(followingCount);
  infoContainer.appendChild(bio);
  container.appendChild(pfp);
  container.appendChild(infoContainer);

  pfp.setAttribute("src", obj.avatar_url);
  pfp.setAttribute("alt", `Profile picture of ${obj.name}`);
  name.textContent = obj.name;
  username.textContent = obj.login;
  location.textContent = obj.location;
  profile.textContent = "Profile:";
  profile.appendChild(profileLink);
  profileLink.textContent = obj.html_url;
  profileLink.setAttribute("href", obj.html_url);
  followersCount.textContent = `Followers: ${obj.followers}`;
  followingCount.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;
  document.querySelector(".cards").appendChild(container)
  
  return container;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
