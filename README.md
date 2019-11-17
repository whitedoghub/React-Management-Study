## Management System

고객관리시스템 (test 용)

### 설치 패키지 : global

```bash
anywhere> npm -v // npm 버전 확인
anywhere> npm install -g npm // npm 최신 버전 업데이트
anywhere> npm install -g nodemon
anywhere> npm install -g create-react-app
```

### 설치 패키지 : client side

```
project client root> npm install @material-ui/core
```

### 설치 패키지 : server side

```nodejs
server project root> npm install body-parser
server project root> npm install express
server project root> npm install mysql
server project root> npm install dotenv
```

.env 파일은 .gitignore에 포함

### 개발 환경 (local git, remote github 연동)

```
project root> git remote add origin <github address>
```

VS Code에서 local git commit

```
git push --set-upstream origin master
```

### 개발 환경 (client proxy 설정)

<li>package.json</li>

```javascript
{
    "proxy": "http://localhost:5000"
}
```

<br>
<hr>

## 참고

<li>Component Lift Cycle</li>

<ol>
    <li>constructor()</li>
    <li>componentWillMount()</li>
    <li>render()</li>
    <li>componentDidMount()</li>
</ol>

<li>dotenv</li>

```
.env file> EXPRESS_PORT=1009
```

```javascript
require('dotenv').config();

const port = process.env.EXPRESS_PORT || 5000;
```

<li>viewport</li>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

[viewport](http://bitly.kr/XNFAVz2)

<li>참고 : 랜덤 이미지 URL</li>

```html,
예) https://placeimg.com/64/64/any
```

[placeimg](https://placeimg.com)

<li>map</li>

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

<li>nodemon</li>

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
