callApi();

let gender;
const taggender = document.getElementById("span-gender-icon");
const tagImg = document.getElementById("Img-profile");
const tagName = document.getElementById("p-name");
const tagAddress = document.getElementById("p-address");
const tagEmail = document.getElementById("p-email");
const btnGen = document.getElementById("btn-random");
const maincard = document.getElementById("div-user-card");
const loading = document.getElementById("div-loading-card");

btnGen.onload = () => {
  maincard.style.display = "none";
  loading.style.display;
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "female") {
    taggender.innertext = "👩";
  } else {
    taggender.innertext = "👦";
  }
  tagEmail.innertext;
  console.log(resp.data.results[0]);
}
