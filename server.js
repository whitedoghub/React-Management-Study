require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.EXPRESS_PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '홍길동',
      birthday: '991112',
      gender: '남',
      job: '대학생'
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '하지원',
      birthday: '971112',
      gender: '여',
      job: '배우'
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '김백규',
      birthday: '741112',
      gender: '남',
      job: '술꾼협회 CTO'
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
