todomvc-angular
===============

## 강의 목차


### 우리가 만들 Todo 앱 미리보기

![]()


### 백엔드에서 프론트까지 설명

...


### Nodejs

Install: [https://nodejs.org/en/](https://nodejs.org/en/)

```
$ node --version
$ which node
```

### Npm

npm은 1) 외부 라이브러리를 설치하고 2) 노드 서버를 구동하는데 사용할 것임

```
$ npm --version
$ which npm
```

npm으로 프로젝트 생성

```
$ npm init
$ touch index.html
```

### Angular Setting

angularjs 설치

```
$ npm install angular --save
```

ngApp


### Template

index.html


### Controller

TodomvcCtrl.js

ngController


### Service

TodomvcStorage.js

angular.factory()


### Stylesheet

[https://github.com/twbs/bootstrap](https://github.com/twbs/bootstrap)

```
$ npm install bootstrap@3 --save
```

### Directive

ngDirective

```html
<todo-item todo="todo" remove="remove(todo)"></todo-item>
```


### Express.js

서버 기능

* 웹페이지 호스팅
* 데이터베이스


```
$ npm isntall expressjs --save
```

sample code: [http://expressjs.com/en/starter/hello-world.html](http://expressjs.com/en/starter/hello-world.html)

```
$ node server/app.js
```

### Web hosting

```javascript
app.use(express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
```


### REST API

GET /todos

DELETE /todos/:id

POST /todos

PUT /todos/:id


### Postman

install [link]()


### Ajax

$http


### Router

### Homework

unit test


