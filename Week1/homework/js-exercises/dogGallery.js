// create DOM element
const mainBlock = document.createElement('div');
document.body.appendChild(mainBlock);
const axiosButton = document.createElement('input');
axiosButton.type = 'button';
axiosButton.className = 'axiosButton';
axiosButton.value = 'Another dog with axios';
mainBlock.appendChild(axiosButton);

const xmlButton = document.createElement('input');
xmlButton.type = 'button';
xmlButton.className = 'xmlButton';
xmlButton.value = 'Another dog with XML';
mainBlock.appendChild(xmlButton);
// block for lists
const listBlock = document.createElement('div');
listBlock.className = 'listBlock';
document.body.appendChild(listBlock);
listBlock.style.display = 'flex';
listBlock.style.flexWrap = 'wrap';
listBlock.style.justifyContent = 'center';
// list for axios
const listDogAxios = document.createElement('ul');
listDogAxios.className = 'axiosList';
listDogAxios.style.flexBasis = '40%';
listBlock.appendChild(listDogAxios);
// list for xml
const listDogXml = document.createElement('ul');
listDogXml.className = 'xmlList';
listDogXml.style.flexBasis = '40%';
listBlock.appendChild(listDogXml);
// style for container block
function positionMainBlock(elem) {
  elem.style.display = 'flex';
  elem.style.justifyContent = 'center';
  elem.style.marginTop = '100px';
}
positionMainBlock(mainBlock);
// style for buttons
function styleAxiosButton(elem) {
  elem.style.justifyContent = 'center';
  elem.style.marginRight = '20px';
  elem.style.padding = '10px';
  elem.style.backgroundColor = 'rgb(15 179 15)';
  elem.style.color = '#ffffff';
  elem.style.border = '1px solid rgb(103 63 202)';
  elem.style.fontWeight = 'bold';
  elem.style.fontSize = '16px';
  elem.style.cursor = 'pointer';
}
styleAxiosButton(axiosButton);
function styleXmlButton(elem) {
  elem.style.justifyContent = 'center';
  elem.style.padding = '10px';
  elem.style.backgroundColor = 'rgb(103 63 202)';
  elem.style.color = '#ffffff';
  elem.style.border = '1px solid rgb(15 179 15)';
  elem.style.fontWeight = 'bold';
  elem.style.fontSize = '16px';
  elem.style.cursor = 'pointer';
}
styleXmlButton(xmlButton);

// function error
function errorMessage() {
  const elemError = document.createElement('div');
  elemError.innerHTML = 'So sorry but your Request Failed!';
  elemError.style.textAlign = 'center';
  elemError.style.position = 'absolut';
  listBlock.appendChild(elemError);
}
// function create new elem li with img
function createRamdomImgLi(myRandomImg) {
  const myImage = document.createElement('img');
  myImage.src = myRandomImg;
  myImage.style.width = '50%';
  myImage.style.height = '100%';
  const li = document.createElement('li');
  li.style.textAlign = 'center';
  li.style.listStyleType = 'none';
  listDogAxios.appendChild(li);
  li.appendChild(myImage);
}

function getDogImgWithAxios() {
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      const dogImage = response.data.message;
      console.log(response.data.message);
      const myRandomImg = dogImage;
      createRamdomImgLi(myRandomImg);
    })
    .catch(error => {
      // see a error if not success
      console.log(error.toJSON());
      errorMessage();
    });
}
getDogImgWithAxios();
axiosButton.addEventListener('click', getDogImgWithAxios);

// function create new elem li with img
function createRamdomImgLiXml(myRandomImg) {
  const myImageXml = document.createElement('img');
  myImageXml.src = myRandomImg;
  myImageXml.style.width = '50%';
  myImageXml.style.height = '100%';
  const li = document.createElement('li');
  li.style.textAlign = 'center';
  li.style.listStyleType = 'none';
  listDogXml.appendChild(li);
  li.appendChild(myImageXml);
}
// another method request
const url = 'https://dog.ceo/api/breeds/image/random1';
function getDogImgXMLHttp() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const dogData = xhr.response.message;
      console.log(xhr.response.message);
      const dogImage = dogData;
      createRamdomImgLiXml(dogImage);
    }
  };
  xhr.onerror = function() {
    console.log('request error');
    errorMessage(`Error ${xhr.status}`);
  };
  xhr.send();
}
getDogImgXMLHttp(url);
xmlButton.addEventListener('click', getDogImgXMLHttp);
