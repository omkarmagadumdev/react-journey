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
- `npm install react` installing react through npm is preffered way.here `-D ` is not there because we want react normal dependcies not devDependecies and also easy to manage the versions in package.json and packagelock.json.
- `npm i react-dom ` `i` is the shot form of install.
- `npx parcel index.html` start the server.
- it gives the error react is not definds because we installed it. will still need to  import it from our node_module `import react from "react"`,`import ReactDOM from "ReactDOM"`

## parcel
- Dev build
- local server
- HMR - hot module Replacement