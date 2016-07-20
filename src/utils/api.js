export default {
  ajax (url, type) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = type;
      request.onload = () => {
        resolve(request.response);
      }
      request.send();
    });
  }
};
