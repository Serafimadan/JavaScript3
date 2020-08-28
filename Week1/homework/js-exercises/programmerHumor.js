// Information to reach API with axios
const url = 'https://xkcd.now.sh/?comic=latest';

function useAxios(urlAddress) {
  // create DOM element
  const myImage = document.createElement('img');
  axios
    // send request to the server
    .get(urlAddress)
    // answer from server
    .then(response => {
      // get url address
      const urlForImg = response.data.img;
      // put url to atribute for img
      myImage.src = urlForImg;
      // put Dom element in DOM tree
      document.body.appendChild(myImage);
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
  xhr.responseType = 'json';
  const xmlImage = document.createElement('img');
  // asynchronous GET-request for the URL
  xhr.open('GET', addressUrl, true);
  // send the request over the network
  xhr.send();
  // called after the response is received
  xhr.onload = function() {
    const urlForImg = xhr.response.img;
    if (xhr.status !== 200) {
      // status of the response
      console.log(`Error ${xhr.status}: ${xhr.response}`); // e.g. 404: Not Found
    } else {
      // show the result
      // put url to atribute for img
      xmlImage.src = urlForImg;
      document.body.appendChild(xmlImage);
      console.log(xhr.response); // response is the server
    }
  };
}
useXML(url);
