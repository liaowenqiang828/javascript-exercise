function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  return fetch(url);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    return result.json();
  })
  .then(data => {
    document.writeln(data.name);
  })
  .catch(error => {
    console.error(error);
  });
