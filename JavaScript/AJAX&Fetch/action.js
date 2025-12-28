//Первое задание

const urlPosts = "https://jsonplaceholder.typicode.com/posts";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const inputUserId = document.querySelector(".input-userId input");
const inputTitle = document.querySelector(".input-title input");
const inputBody = document.querySelector(".input-body input");
const submitButton = document.querySelector(".submit-button button");
const responseShow = document.createElement("div");
container.appendChild(responseShow);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newPost = {};
  newPost.userId = inputUserId.value;
  newPost.title = inputTitle.value;
  newPost.body = inputBody.value;

  fetch(urlPosts, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((data) => data.json())
    .then((info) => {
      responseShow.textContent = `Id вашего поста: ${info.id}`;
    });
});

//Второе задание

const showAllPosts = document.createElement("button");
showAllPosts.textContent = "show all posts";
container.appendChild(showAllPosts);
const renderPosts = document.createElement("div");
container.appendChild(renderPosts);

let allPosts = [];

const renderPostsFunction = function (info) {
  for (let i = 0; i < info.length; i++) {
    const showPostId = document.createElement("div");
    renderPosts.appendChild(showPostId);
    const showPostUserId = document.createElement("div");
    renderPosts.appendChild(showPostUserId);
    const showPostTitle = document.createElement("div");
    renderPosts.appendChild(showPostTitle);
    const showPostBody = document.createElement("div");
    renderPosts.appendChild(showPostBody);
    showPostId.textContent = `Id: ${info[i].id}`;
    showPostUserId.textContent = `user Id: ${info[i].userId}`;
    showPostTitle.textContent = `title: ${info[i].title}`;
    showPostBody.textContent = `body: ${info[i].body}`;
  }
};

showAllPosts.addEventListener("click", () => {
  fetch(urlPosts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      allPosts = data;
      renderPosts.innerHTML = "";
      renderPostsFunction(allPosts);
    });
});

//Третье задание

const deletePostInput = document.createElement("input");
deletePostInput.setAttribute("placeholder", "ID");
container.appendChild(deletePostInput);
const deletePost = document.createElement("button");
deletePost.textContent = "delete";
container.appendChild(deletePost);

deletePost.addEventListener("click", (event) => {
  event.preventDefault();
  const idToDelete = Number(deletePostInput.value);

  let isExists = false;
  for (let i = 0; i < allPosts.length; i++) {
    if (allPosts[i].id === idToDelete) {
      isExists = true;
      break;
    }
  }

  if (!isExists) {
    alert(`Ошибка: Пост с ID ${idToDelete} не найден в списке.`);
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${idToDelete}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.status === 200) {
      allPosts = allPosts.filter((post) => post.id !== idToDelete);
      renderPosts.innerHTML = "";
      renderPostsFunction(allPosts);
    }
  });
});

//Четвертое задание

const showUserButton = document.createElement("button");
showUserButton.textContent = "show users";
container.appendChild(showUserButton);
const userIdInput = document.createElement("input");
userIdInput.setAttribute("placeholder", "ID user to update");
container.appendChild(userIdInput);
const renderUserProfiles = document.createElement("div");
container.appendChild(renderUserProfiles);

let userProfiles = [];

const renderUserProfile = function (info) {
  for (let i = 0; i < info.length; i++) {
    const userId = document.createElement("div");
    renderUserProfiles.appendChild(userId);
    const userName = document.createElement("div");
    renderUserProfiles.appendChild(userName);
    const userUserName = document.createElement("div");
    renderUserProfiles.appendChild(userUserName);
    const userEmail = document.createElement("div");
    renderUserProfiles.appendChild(userEmail);
    const userAdress = document.createElement("div");
    renderUserProfiles.appendChild(userAdress);
    const userAdressStreet = document.createElement("div");
    renderUserProfiles.appendChild(userAdressStreet);
    const userAdressSuite = document.createElement("div");
    renderUserProfiles.appendChild(userAdressSuite);
    const userAdressCity = document.createElement("div");
    renderUserProfiles.appendChild(userAdressCity);
    const userAdressZipcode = document.createElement("div");
    renderUserProfiles.appendChild(userAdressZipcode);
    const userAdressGeo = document.createElement("div");
    renderUserProfiles.appendChild(userAdressGeo);
    const userAdressGeoLat = document.createElement("div");
    renderUserProfiles.appendChild(userAdressGeoLat);
    const userAdressGeoLng = document.createElement("div");
    renderUserProfiles.appendChild(userAdressGeoLng);
    const userPhone = document.createElement("div");
    renderUserProfiles.appendChild(userPhone);
    const userWebsite = document.createElement("div");
    renderUserProfiles.appendChild(userWebsite);
    const userCompany = document.createElement("div");
    renderUserProfiles.appendChild(userCompany);
    const userCompanyName = document.createElement("div");
    renderUserProfiles.appendChild(userCompanyName);
    const userCompanyCatchPhrase = document.createElement("div");
    renderUserProfiles.appendChild(userCompanyCatchPhrase);
    const userCompanyBs = document.createElement("div");
    renderUserProfiles.appendChild(userCompanyBs);

    userId.textContent = `id: ${info[i].id}`;
    userName.textContent = `name: ${info[i].name}`;
    userUserName.textContent = `username: ${info[i].username}`;
    userEmail.textContent = `email: ${info[i].email}`;
    userAdressStreet.textContent = `street: ${info[i].address.street}`;
    userAdressSuite.textContent = `suite: ${info[i].address.suite}`;
    userAdressCity.textContent = `city: ${info[i].address.city}`;
    userAdressZipcode.textContent = `zipcode: ${info[i].address.zipcode}`;
    userAdressGeoLat.textContent = `geo lat: ${info[i].address.geo.lat}`;
    userAdressGeoLng.textContent = `geo lng: ${info[i].address.geo.lng}`;
    userPhone.textContent = `phone: ${info[i].phone}`;
    userWebsite.textContent = `website: ${info[i].website}`;
    userCompanyName.textContent = `company name: ${info[i].company.name}`;
    userCompanyCatchPhrase.textContent = `catch phrase: ${info[i].company.catchPhrase}`;
    userCompanyBs.textContent = `company bs: ${info[i].company.bs}`;
  }
};

showUserButton.addEventListener("click", (event) => {
  event.preventDefault();

  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
      userProfiles = data;
      renderUserProfiles.innerHTML = "";
      renderUserProfile(userProfiles);
    });
});

const updateForm = document.querySelector(".form-update-user");
const inputUpdateUserId = document.querySelector(".input-user-update-id input");
const inputName = document.querySelector(".input-name input");
const inputUserName = document.querySelector(".input-username input");
const inputEmail = document.querySelector(".input-email input");
const inputUserStreet = document.querySelector(".input-street input");
const inputUserSuite = document.querySelector(".input-suite input");
const inputUserCity = document.querySelector(".input-city input");
const inputUserZipcode = document.querySelector(".input-zipcode input");
const inputUserGeoLat = document.querySelector(".input-lat input");
const inputUserGeoLng = document.querySelector(".input-lng input");
const inputUserPhone = document.querySelector(".input-phone input");
const inputUserWebsite = document.querySelector(".input-website input");
const inputUserCompanyName = document.querySelector(".input-company-name input");
const inputUserCatchPhrase = document.querySelector(".input-catchPhrase input");
const inputUserCompanyBs = document.querySelector(".input-company-bs input");
const updateButton = document.querySelector(".submit-update-button button");

updateButton.addEventListener("click", (event) => {
  event.preventDefault();
  const userUpdate = {
    address: {
      geo: {},
    },
    company: {},
  };
  userUpdate.id = inputUpdateUserId.value;
  userUpdate.name = inputName.value;
  userUpdate.username = inputUserName.value;
  userUpdate.email = inputEmail.value;
  userUpdate.address.street = inputUserStreet.value;
  userUpdate.address.suite = inputUserSuite.value;
  userUpdate.address.city = inputUserCity.value;
  userUpdate.address.zipcode = inputUserZipcode.value;
  userUpdate.address.geo.lat = inputUserGeoLat.value;
  userUpdate.address.geo.lng = inputUserGeoLng.value;
  userUpdate.phone = inputUserPhone.value;
  userUpdate.website = inputUserWebsite.value;
  userUpdate.company.name = inputUserCompanyName.value;
  userUpdate.company.catchPhrase = inputUserCatchPhrase.value;
  userUpdate.company.bs = inputUserCompanyBs.value;

  const userProfileId = Number(userIdInput.value);
  fetch(`https://jsonplaceholder.typicode.com/users/${userProfileId}`, {
    method: "PUT",
    body: JSON.stringify(userUpdate),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((updatedUser) => {
      const index = userProfiles.findIndex(
        (userToUpdate) => userToUpdate.id === userProfileId
      );

      userProfiles[index] = updatedUser;

      renderUserProfile(userProfiles);
    });
});
