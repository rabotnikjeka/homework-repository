//первое задание

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data");
    }, 2000);
  });
}

getUserData()
  .then((response) => {
    return response + " successfully resolved";
  })
  .then((response) => {
    console.log(response);
  });

//второе задание

function userDataAfterThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("after 3 second");
    }, 3000);
  });
}
function userDataAfterFiveSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("after 5 second");
    }, 5000);
  });
}

Promise.all([userDataAfterThreeSecond(), userDataAfterFiveSecond()]).then((response) => {
  console.log(response);
});

//третье задание

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function userDataAfterRandomSecondNumberOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("the first one");
    }, getRandomArbitrary(1000, 5000));
  });
}

function userDataAfterRandomSecondNumberTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("the second one");
    }, getRandomArbitrary(1000, 5000));
  });
}

Promise.race([
  userDataAfterRandomSecondNumberOne(),
  userDataAfterRandomSecondNumberTwo(),
]).then((response) => {
  console.log(response);
});
