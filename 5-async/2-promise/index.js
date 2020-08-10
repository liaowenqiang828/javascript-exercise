function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xhr.open('GET', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
    // end -->
  });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    console.log(result);
    document.writeln(JSON.parse(result.currentTarget.responseText).name);
  })
  .catch(error => {
    console.error(error);
  });
