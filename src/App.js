import React from "react";
import CounterClass from "./Components/CounterClass";
import CounterFunction from "./Components/CounterFunction";
import ClassComponentTodo from "./Components/ClassComponentTodo";
import CounterSakClass from "./Components/CounterSakClass";
import Colorchange from "./Components/Colorchange";

export default function App() {
  // [] - array
  // {} - object
  // () - function

  const data = [
    {
      id: 0,
      name: "sakshi",
      surname: "singh",
      getFullName: function () {
        return this.name + this.surname;
      },
    },
    {
      id: 1,
      name: "ayush",
      surname: "manjhi",
      getFullName: function () {
        return this.name + this.surname;
      },
    },
  ];

  const dataObject = {
    id: 0,
    name: "sakshi",
    surname: "singh",
    getFullName: function () {
      return this.name + this.surname;
    },
  };

  // console.log(data);
  return (
    <>
      <h1>Nameste React</h1>
      <Colorchange />

      {/* <CounterSakClass /> */}

      {/* <ClassComponentTodo /> */}

      {/* <CounterFunction /> */}
      {/* <CounterClass /> */}

      {/* {mapCalled()} */}
      {/* {filterCalled()} */}
    </>
  );
}

// IMPORTANT typeof OPERATOR IT IS USED TO CHECK THE TYPE OF THE VARIABLE

// import CounterUseReducer from "./Hooks/useReducer/CounterUseReducer";
// import CounterUseRef from "./Hooks/UseRef/CounterUseRef";
// import InputPlayUseRef from "./Hooks/UseRef/InputPlayUseRef";

// return <CounterUseRef />;
// return <InputPlayUseRef />;
// return <CounterUseReducer />;

{
  /* <h1>name: {data[0].name} </h1>
<h1>Surname: {data[0].surname} </h1>
<h1>FullName: {data[0].getFullName()} </h1> */
}

// const mapCalled = () => {
//   const newMapDataArr = data.map((currentElement, index, array) => {
//     return <h1>{currentElement.name}</h1>;
//   });
//   console.log("newMapDataArr");
//   console.log(newMapDataArr);
//   return newMapDataArr;
// };
// const filterCalled = () => {
//   const newFIlterDataArr = data.filter((currentElement, index, array) => {
//     console.log(array);
//     return false;
//   });
//   data.reduce((currentElement, index, array) => {
//     console.log(array);
//     return false;
//   });

// return newFIlterDataArr;
// console.log("newFIlterDataArr");
// console.log(newFIlterDataArr);
// };

//
// <div className="UserInfo">
// <img className="Avatar"
//      src={props.author?.avatarUrl} --- if authorurl is present in author then return url else do nothing // live saver **
//      alt={props.author?.name} />
// <div className="UserInfo-name">
//   {props.author?.name}
// </div>

// The JavaScript for in statement loops through the properties of an Object:
// {(function () {
//   for (let x in dataObject) {
//     if (x === "getFullName") {
//       {
//         /* console.log(x + " :", dataObject[x]()); */
//       }
//       <h1> {dataObject[x]()} </h1>;
//     } else {
//       <h1> {dataObject[x]} </h1>;
//       {
//         /* console.log(x + " :", dataObject[x]); */
//       }
//     }
//   }
// })()}

// // for of loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// {(function () {
//   for (let i of data) {
//     console.log(i.getFullName());
//   }
// })()}
