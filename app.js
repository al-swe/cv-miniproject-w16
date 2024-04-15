// DOM elements
const image = document.getElementById("image");
const nameDom = document.getElementById("name");
const myAddress = document.getElementById("myAddress");
const myNumber = document.getElementById("myNumber");
const myEmail = document.getElementById("myEmail");

// Async function that fetches data then populates above DOM elements
async function fetchData() {
  const response = await fetch("https://randomuser.me/api/?gender=male");
  const responseJson = await response.json();
  const person = responseJson.results[0];
  console.log(person);

  let fullName = `${person.name.first} ${person.name.last}`;
  nameDom.innerHTML = fullName;

    document.title = `${fullName} - CV`;

  image.src = person.picture.large;
  image.alt = `Image of ${fullName}.`;

  let fullAddress = `${person.location.street.number} ${person.location.street.name}`;
  myAddress.innerHTML = fullAddress;
  myNumber.innerHTML = person.phone;
  myEmail.innerHTML = person.email;

}

fetchData();
