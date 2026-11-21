import React from "react";
import Counter from "./Components/counter.jsx";
import Card from "./Components/card.jsx";
import Todo from "./Components/Todo.jsx";
import Effects from "./Components/Effects.jsx";
import WeatherAPI from "./Components/weatherAPI.jsx";
function App() {
  return (
    <div>
      {
    //   [
    //     React.createElement("div", null, [
    //     React.createElement("h2", null, "lorem ipsum dolor sit amet"),
    //     React.createElement(
    //       "p",
    //       null,
    //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio incidunt inventore similique, libero voluptatum veritatis enim voluptate doloribus vel natus! Assumenda animi aut asperiores perspiciatis.",
    //     ),
    //   ]),
    //   React.createElement("div",null,[
    //        React.createElement("h2", null, "lorem ipsum dolor sit amet"),
    //        React.createElement(
    //         "p",
    //         null,
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo beatae autem sint nobis, ab dolor alias eum inventore incidunt blanditiis aut deleniti repellendus asperiores.",
    //        ),

    //   ]),
    
    //   ]
    }
    {/* <Counter/> */}
    {/* <Card/> */}
    {/* <Todo/> */}
    {/* <Effects/> */}
    <WeatherAPI />
    </div>
  );

}
export default App;
