/*const heading=React.createElement("h1",{},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const heading=React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React!"
);

//console.log(heading) return an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); #render method is converting this object into element(HTML element) which browser understands <h1>tag */

/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */

const parent=React.createElement( //parent-->object,this object is react element
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},
            "I'm h1 tag"
        )
    )
);

//ReactElement(Object)=>This objects is converted into HTML(Browserunderstands)
console.log(parent)// returns a object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */

/*const parent2=React.createElement( //parent-->object,this object is react element
    "div",
    {id:"parent"},[
    React.createElement(
        "div",
        {id:"child1"},[
            React.createElement(
                "h1",
                {},
                "I'm h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "I'm h1 tag"
            )
        ]),
        React.createElement(
            "div",
            {id:"child2"},[
                React.createElement(
                    "h1",
                    {},
                    "I'm h1 tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I'm h1 tag"
                )
            ]),
]);*/

/*console.log(parent2)//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);*/

// If we need to make a sibling children if we want to pass more than one children we have to pass it as array 