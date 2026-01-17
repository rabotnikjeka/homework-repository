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

const createInfoRow = (parent, label, value) => {
  const element = document.createElement("div");
  element.innerHTML = `${label}: ${value || "-"}`;
  parent.appendChild(element);
};

const showUserButton = document.createElement("button");
showUserButton.textContent = "show users";
container.appendChild(showUserButton);

const userIdInput = document.createElement("input");
userIdInput.setAttribute("placeholder", "ID user to update");
container.appendChild(userIdInput);

const renderUserProfiles = document.createElement("div");
container.appendChild(renderUserProfiles);

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

let userProfiles = [];

const renderUserProfile = (users) => {
  renderUserProfiles.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");

    createInfoRow(card, "id", user.id);
    createInfoRow(card, "Name", user.name);
    createInfoRow(card, "username", user.username);
    createInfoRow(card, "email", user.email);

    if (user.address) {
      createInfoRow(card, "street", user.address.street);
      createInfoRow(card, "suite", user.address.suite);
      createInfoRow(card, "city", user.address.city);
      createInfoRow(card, "zipcode", user.address.zipcode);
      if (user.address.geo) {
        createInfoRow(card, "geo lat", user.address.geo.lat);
        createInfoRow(card, "geo lng", user.address.geo.lng);
      }
    }

    if (user.company) {
      createInfoRow(card, "company", user.company.name);
      createInfoRow(card, "catchPhrase", user.company.catchPhrase);
      createInfoRow(card, "bs", user.company.bs);
    }

    renderUserProfiles.appendChild(card);
  });
};

const loadUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
      userProfiles = data;
      renderUserProfile(userProfiles);
    });
};

showUserButton.addEventListener("click", loadUsers);

updateButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const targetId = Number(userIdInput.value);

  if (userProfiles.length === 0) {
    await loadUsers();
  }

  const index = userProfiles.findIndex((u) => u.id === targetId);

  if (index === -1) {
    alert(`Ошибка: Пользователь с ID ${targetId} не найден.`);
    return;
  }

  const userUpdate = {
    id: inputUpdateUserId.id,
    name: inputName.value,
    username: inputUserName.value,
    email: inputEmail.value,
    address: {
      street: inputUserStreet.value,
      suite: inputUserSuite.value,
      city: inputUserCity.value,
      zipcode: inputUserZipcode.value,
      geo: {
        lat: inputUserGeoLat.value,
        lng: inputUserGeoLng.value,
      },
    },
    phone: inputUserPhone.value,
    website: inputUserWebsite.value,
    company: {
      name: inputUserCompanyName.value,
      catchPhrase: inputUserCatchPhrase.value,
      bs: inputUserCompanyBs.value,
    },
  };

  fetch(`https://jsonplaceholder.typicode.com/users/${targetId}`, {
    method: "PUT",
    body: JSON.stringify(userUpdate),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((updatedData) => {
      userProfiles[index] = updatedData;
      renderUserProfile(userProfiles);
      alert("Данные успешно обновлены");
    });
});
