// const heading  = React.createElement("h1",{id:"heading",xyz:"abc"},"hello react"); 

// root.render(heading)

// <!-- <div id="parent">
//     <div id="child">
//         <h1>i'am h1 tag</h1>
//         <h2>i'am h1 tag</h2>  ==> if want to use sibling have to make it an array
//     </div>
// </div> -->

// react element(object) ==> HTML(which the browser understands)
//

const parent  = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"i am an h1 tag"),React.createElement("h2",{},"iam h2 tag")]))


console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent) 

 