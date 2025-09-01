
import React from "react"
import ReactDOM from "react-dom/client";


const heading = <h1 id="heading" >hello</h1>

// const jsxheading = <h1 id="heading" >hello</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));



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
root.render(<HeadingComponent/>);