const userInfo = {
  userFullName: {
    userName: "Evgeniy",
    userSurname: "Fedorov",
  },
  userAge: 26,
  userAdress: {
    userCity: "Omsk",
    userStreet: "20 let Oktybrya",
    userPostIndex: 644088,
  },
  selectedNumbers: [17, 22, 15, 10],
  isStudent: true,
};

console.log(userInfo.userAge);
console.log(userInfo.userFullName.userName);

console.log(Object.entries(userInfo));

for (const key in userInfo) {
  console.log(userInfo[key]);
}

userInfo.userFullName = "Evgeniy Fedorov";
delete userInfo.userFullName.userName;
delete userInfo.userFullName.userSurname;
userInfo.hobby = "football";

for (const key in userInfo) {
  console.log(key);
}

console.log(userInfo.userFullName);

const {
  userFullName,
  userAge,
  userAdress: { userCity, userStreet, userPostIndex },
  selectedNumbers: [a, b, c, d],
  isStudent,
  hobby,
} = userInfo;

console.log(userFullName);
console.log(userAge);
console.log(userCity);
console.log(userStreet);
console.log(userPostIndex);
console.log(a, b, c, d);
console.log(isStudent);
console.log(hobby);
