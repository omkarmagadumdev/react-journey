# React

## react cdn 
```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
- CDN: A Content Delivery Network is a distributed set of servers that delivers files (like JS/CSS/images) from locations closer to users to reduce latency and speed up loading.

- crossorigin (on script): Tells the browser to load a cross-origin script with CORS (usually as anonymous) so it can fetch from a CDN and report detailed errors without sending credentials.




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
