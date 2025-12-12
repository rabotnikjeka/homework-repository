//первое задание

async function delay(ms) {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Задержка завершена");
    }, ms);
  });
  console.log(data);
}

delay(2000);

//второе задание

const url = "https://jsonplaceholder.typicode.com/todos";

async function fetchUserData(url) {
  const data = await fetch(url);
  const dataJson = await data.json();
  console.log(dataJson);
}

fetchUserData(url);
