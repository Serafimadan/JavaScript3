// Information to reach API with axios
const url = 'https://www.randomuser.me/api';

function useAxios(urlAddress) {
  axios
    .get(urlAddress)
    .then(response => {
      // see a result if success
      console.log(response);
    })
    .catch(error => {
      // see a error if not success
      console.log(error.toJSON());
    });
}
useAxios(url);

// Information to reach API with XMLHttpRequest
function useXML(addressUrl) {
  const xhr = new XMLHttpRequest();
  // asynchronous GET-request for the URL
  xhr.open('GET', addressUrl, true);
  // send the request over the network
  xhr.send();
  // called after the response is received
  xhr.onload = function() {
    if (xhr.status !== 200) {
      // status of the response
      console.log(`Error ${xhr.status}: ${xhr.response}`); // e.g. 404: Not Found
    } else {
      // show the result
      console.log(xhr.response); // response is the server
    }
  };
}
useXML(url);
