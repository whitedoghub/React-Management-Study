## Management System

고객관리시스템 (test 용)

### 개발 환경 (설치 패키지)

```
anywhere> npm -v // npm 버전 확인
anywhere> npm install -g npm // npm 최신 버전 업데이트
anywhere> npm install -g nodemon
anywhere> npm install -g create-react-app
> create-react-app management
project root> npm install @material-ui/core
project root> npm install dotenv
```

### 개발 환경 (local git, remote github 연동)

```
project root> git remote add origin <github address>
```

VS Code에서 local git commit

```
git push --set-upstream origin master
```

##### 참고 : dotenv

```
.env file> EXPRESS_PORT=1009
```

```javascript
require('dotenv').config();

const port = process.env.EXPRESS_PORT || 5000;
```

##### 참고 : viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

[viewport](http://bitly.kr/XNFAVz2)

##### 참고 : 랜덤 이미지 URL

```html,
예) https://placeimg.com/64/64/any
```

[placeimg](https://placeimg.com)

##### 참고 : map

```javascript
const customer = [[..}, {...}]];
const newArray = customers.map(c => {return (...)})
```

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots는 [1, 2, 3]
// numbers는 그대로 [1, 4, 9]
```

##### 참고 : nodemon

서버 코드가 변경될 때 자동 재시작

```nodejs
> npm install -g nodemon
> nodemon --watch /src src/index.js
```

또는, package.json에 포함

```javascript
"script" : {
    "start" : "node src",
    "start:dev": "nodemon --watch /src src/index.js"
}
```
