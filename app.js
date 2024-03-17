import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => and when this object is render on the dom then it becomes html element

const heading = React.createElement("h1", {id:"heading"}, "Namaste-react");

const root = ReactDOM.createRoot(document.getElementById("root"));  // with the help of this(reactdom) we can show react element on browser
root.render(heading);


//----------------------------------------------------------------------------------------------

// above syntax for creating react element is tough , it is not readable , not developer friendly .
// JSX (javascript syntax) - through this we can easily create react element , it makes development and developer life easier.
// JSX is not html is js , its just like that and it is separate and react is separate

// jsx is not a pure javascript , before it reaches the browser or js it is transpiled by parcels(babel -- > package)
// jsx ->babel transpiles it-> React.createElement -> js object -> when render on dom it gives html element.

const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);


//---------------React component----------------------------------------------------------------------

// class based -- old way of writing code ( it uses javascript classes)
// functional based -- new way of writing code ( a normal javascript functions that returns some piece of jsx code)

const HeadingComponent = () => {
    return <h1 className="heading">Nmaste React using functional component</h1>;
};

const HeadingComponent1 = () => <h1 className="heading">Namaste React using functional componenet 1</h1>
const number = 10000;
const HeadingComponent2 = () => (
    <div id = "container">
        <h2>{number}</h2>
        <h2>{100+2000}</h2>
        {heading}
        {HeadingComponent()}
        <HeadingComponent1 />         
        <h1 className="heading">Namaste React using functional componenet2</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);

