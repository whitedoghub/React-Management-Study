import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
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
];

function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
