// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");
// here the object is used for providing attributes to a tag like their id ans so on
// createElement - it creates javascript object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// this render will convert javascript object into h1 tag and put it into dom or root element



/*
for nested --- 
   <div id:"parent">
      <div id:"child1">
       <h1>i am h1 tag</h1>
       <h2>i am h2 tag</h2>
       </div>

       <div id:"child2">
       <h1>i am h1 tag</h1>
       <h2>i am h2 tag</h2>
       </div>
     </div>
 */      


const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag")
    ]),
    React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag")
    ])
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);