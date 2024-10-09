import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>(
  <h1>Namaste React using JSX</h1>
)

const number=7
//In JSX if we use {} we can write any JavaScript expression code inside it.

const HeadingComponent = () =>( 
  <div id="container">
    <Title/> 
    {/*We can also write like <Title></Title> and <Title/> both are same */}
    <h1>{number} </h1>
    <h1>Namaste React using Functional Component</h1>
  </div>
)

//{number} - it will display 7 as normal
//<h1>{number}</h1> - we can also use tags,here it is used as h1 tag it displays 7 as h1-heading
//In JSX if we use {} we can write any JavaScript expression code inside it
//Example:{console.log("React")}

console.log(HeadingComponent);
//This above is an example of Component Composition => Composing two components in one another


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>) 

/*
    1.What is the Title we written?
     =>Title we written is a functional component,functional component is normal javascript function which return JSX
    2.How we can call Title as Function inside JSX ?
    {Title()}
    3.If we don't want to call as function we can do as <Title/> or we can do like <Title></Title>
    
  At the end of the day,
    =>React is Javascript 
    =>Functional Components are functions
    =>JSX is React.createElement at the end of the day
    =>React.createElement is object 

    JSX makes our code readable,JSX is not React.
    If we were use React.createElement it becomes more harder to write so JSX makes our work easier to write code.
*/



