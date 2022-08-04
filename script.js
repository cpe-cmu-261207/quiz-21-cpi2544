
let gender;
const taggender = document.getElementById("span-gender-icon");
const tagImg = document.getElementById("Img-profile");
const tagName = document.getElementById("p-name");
const tagAddress = document.getElementById("p-address");
const tagEmail = document.getElementById("p-email");
const btnGen = document.getElementById("btn-random");
const maincard = document.getElementById("div-user-card");
const loading = document.getElementById("div-loading-card");


async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/%22);
  if (resp.data.results[0].gender == "female") {
      spanGenderIcon.innerText = "👩";
  } else {
      spanGenderIcon.innerText = "👨";
  }
  imgProfile.src = resp.data.results[0].picture.large;
  pName.innerText =
      resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  pAddress.innerText =
      resp.data.results[0].location.city +
      " " +
      resp.data.results[0].location.state +
      " " +
      resp.data.results[0].location.country +
      " " +
      resp.data.results[0].location.postcode;
  pEmail.innerText = resp.data.results[0].email;
  console.log(resp.data.results[0]);
}