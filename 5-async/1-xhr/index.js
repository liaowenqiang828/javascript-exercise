function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 299) {
      successCallback(xhr);
    }
    if (xhr.readyState === 4 && (xhr.status < 200 || xhr.status > 299)) {
      errorCallback(xhr);
    }
  };

  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result.responseText).name);
  },
  error => {
    console.error(error);
  }
);
