# React 🚀🚀

## react cdn 
```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
- CDN: A Content Delivery Network is a distributed set of servers that delivers files (like JS/CSS/images) from locations closer to users to reduce latency and speed up loading.

- crossorigin (on script): Tells the browser to load a cross-origin script with CORS (usually as anonymous) so it can fetch from a CDN and report detailed errors without sending credentials.

- cdn link is not preffered way to bring React & ReactDOM to our project




```js
<div id="parent">
    <div id="child">
        <h1>i'am h1 tag</h1>
        <h2>i'am h1 tag</h2>  ==> if want to use sibling have to make it an array
    </div>
</div> 

// if we want to do this in react

const parent  = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"i am an h1 tag"),React.createElement("h2",{},"iam h2 tag")]))


console.log(parent)
const  root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

```
- react element(object) ==> HTML(which the browser understands)
- With lots of nested divs, the structure gets complicated; JSX makes it much more readable and preferred

```html
  <div id="root">
        omkar is here!
    </div>
// that root.render is replaced this root basically react is taken control over the html
```


```js

npm install -D parcel
```
- there ar two types of dependcies  we can  install 
1. Is dev dependcies ==> development phase
2. Normal dependcies ==> use in production also  

- in parcel when installed `"parcel": "^2.15.4"` (^) this mean caret which will update the parcel if any update came if (~) tilde means upadte the major update only

- `pakage.json` file is created after install of parecel it is configuration for npm which will keep track of what version of pecake is installed in our project.
- `packagelock.jason` ==> keep track of exact version that being install.
- `node modules` which we installed  parcel it is fetching all the code from parcel and putting inside the node modules.
- transitive dependencies  ==> which means parcvel has its own dependcies those has thare own dependcies thats why node module has lot of code 
- `node modules` we dont have to push these to github even if we lost or delete it we can again get it  if we have `pakage.json` & `packagelock.jason` we can install it again using `npm install`

# Igniting our App

- `npx parcel index.html`- it will ignite our project 
- `npm install react` installing react through npm is preffered way.here `-D ` is not there because we want react normal dependcies with devDependecies and also easy to manage the versions in package.json and packagelock.json.
- `npm i react-dom ` `i` is the shot form of install.
- `npx parcel index.html` start the server.
- `npx parcel build index.html` it will create dist 
- it gives the error react is not definds because we installed it. will still need to  import it from our node_module `import react from "react"`,`import ReactDOM from "ReactDOM"`

## parcel
- Dev build
- local server
- HMR - hot module Replacement
- it uses file watching algo written in c++
- caching - faster builds `.parcel-chache`
- image optimization
- bundling(parcel is a bundler)
- compress 
- consistent Hashing
- code splitting
- differential bundling 
etc

- browserslist - which browser and which version it should be camapitable need to configure in package.json.


# Laying the foundation

- `npx parcel index.html` we dont have to run this commond again and again 
```js
  "scripts": {
    "start":"parcel index.html",
    "build" : "parcel build index.html",
    "test": "jest"
  },
```
- to start `npm run start / npm start ,npm run build....`we can give a script to it  is a industry standerd.

- `JSX` is not HTML in js it is HTML like syntax or XML
- jsx(`transpiles` before it reaches the Js) - parcel - Babel.
- behind the scene `jsx ==> React.createElement ==>ReactElement-JS-object==>HTMLElement(render)`(being transpiled).
- `babel` is tranpiling jsx to React.createElement.
- jsx  is `camelcase`.

# React components

- Thare are two type of React components.
1. class Based componments(old way of writing components).
2. functional components(new way of writing components).

## React functional components
```js
const HeadingComponent = () =>{
    return <h1>namaste React</h1>
}
```

```js
const HeadingComponent = ()=>{
    return <h1 .className ="heading"> Nmaste react</h1>
};


```
## component composition

```js
const title = () =>(
    <h1 classname="head" tabindex="5" >
        Namaste React using jsx 
    </h1>
);

//component compositions

const HeadingComponent = () =>(
    <div>
        <title />
        <h1 clasname="heading">Namaste React functional component</h1>
    </div>
)
```
- `Functional component` : is a normal js function which return some piece of react element and jsx code.
- JSX prevents `cross site scripting`.


# project 

## planning
1. Header - logo / links- home,aout,cart.
2. body. - Search bar,search buttons,restarunt cards- tital of food,rating.
3. fotter - copyright and other things.
/**
 * Header
 * - Logo
 * - Nav Items
 * 
 * body
 * - Search
 * - restarunt cotainer
 *      - Restaurant card
 *          - img
 *          - Name of res,Star Rating,cuisines,delivery tie
 * footer
 * - copyright
 * - link
 * - Adress
 * - contact information
 * 
 */


- passing prop to the component is just like the passing argument to the functions `lingo:passing props to component`.
- `config driven ui`: ui is config driven.
