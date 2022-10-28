import React, { useRef } from "react";
import { useState } from "react";

export default function InputPlayUseRef() {
  const input1 = useRef(0);
  const input2 = useRef(0);

  console.log(input1);

  const handelInputOne = (e) => {
    input2.current.value = parseInt(e.target.value) + 1;
  };
  const handelInputTwo = (e) => {
    input1.current.value = parseInt(e.target.value) - 1;
  };

  return (
    <div>
      <input
        ref={input1}
        type="number"
        onChange={(e) => handelInputOne(e)}
        placeholder="input 1"
      />
      <input
        ref={input2}
        type="number"
        onChange={(e) => handelInputTwo(e)}
        placeholder="input 2"
      />
    </div>
  );
}

// NORMAL WAY
// export default function InputPlayUseRef() {
//     const [inputOne, setInputOne] = useState(0);
//     const [inputTwo, setInputTwo] = useState(0);

//     const handelInputOne = (e) => {
//       setInputOne(e.target.value);
//       setInputTwo(parseInt(e.target.value) + 1);
//     };
//     const handelInputTwo = (e) => {
//       setInputTwo(e.target.value);
//       setInputOne(parseInt(e.target.value) - 1);
//     };

//     return (
//       <div>
//         <input
//           type="number"
//           value={inputOne}
//           onChange={(e) => handelInputOne(e)}
//           placeholder="input 1"
//         />
//         <input
//           type="number"
//           value={inputTwo}
//           onChange={(e) => handelInputTwo(e)}
//           placeholder="input 2"
//         />
//       </div>
//     );
//   }
