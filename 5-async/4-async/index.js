async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  await fetch(url)
    .then(result => {
      return result.json();
    })
    .then(data => document.writeln(data.name));
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
