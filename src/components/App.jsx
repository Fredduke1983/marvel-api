import axios from 'axios';

const getApiHash = require('marvel-api-hash-generator').getApiHash;

const timeStamp = 1;
const privateKey = '6f6e7cd787795ceca7b2742df67cf076ea182b0a';
const publicKey = '33ac368140f5c441c7efd0149c70a819';
const hashValue = getApiHash(timeStamp, privateKey, publicKey);
console.log(hashValue);

const requestConstantCharacters =
  'http://gateway.marvel.com/v1/public/comics/291?';
const marvelUrl = `${requestConstantCharacters}ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;

axios
  .get(marvelUrl)
  .then(el => console.log(el))
  .catch(err => Error(err));

// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<public-key>&hash=09fe991c34996e64c0424e446f27c9f0

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
