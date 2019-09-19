const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

const pictureContainer = document.getElementById("profile_picture")
const nameContainer = document.getElementById("fullname")
const emailContainer = document.getElementById("email")
const streetContainer = document.getElementById("street")
const cityContainer = document.getElementById("city")
const stateContainer = document.getElementById("state")
const postcodeContainer = document.getElementById("postcode")
const phoneContainer = document.getElementById("phone")
const cellContainer = document.getElementById("cell")
const dobContainer = document.getElementById("date_of_birth")
const button = document.querySelector(".btn-primary")

button.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
  .then( response => response.json())
  .then( data => {
    let picture = data.results[0].picture.large
    let title = data.results[0].name.title
    let firstName = data.results[0].name.first
    let lastName = data.results[0].name.last
    let email = data.results[0].email
    let street = data.results[0].location.street
    let city = data.results[0].location.city
    let state = data.results[0].location.state
    let postcode = data.results[0].location.postcode
    let phone = data.results[0].phone
    let cell = data.results[0].cell
    let dob = data.results[0].dob.date

    let fullName = title + " " + firstName +  " " + lastName

    pictureContainer.src = picture
    nameContainer.innerText = fullName
    emailContainer.innerText = email
    streetContainer.innerText = street
    cityContainer.innerText = city
    stateContainer.innerText = state
    postcodeContainer.innerText = postcode
    phoneContainer.innerText = phone
    cellContainer.innerText = cell
    dobContainer.innerText = dob
  })
});
