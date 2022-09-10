import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";
import ColorBox from "./ColorBox";
import data from "./data";
function App() {
  const log = console.log;
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "bbfb9e883dmshd078406e8bbb9adp13748bjsnc8c6c71d4b9f",
  //       "X-RapidAPI-Host": "random-palette-generator.p.rapidapi.com",
  //     },
  //   };

  //   fetch(
  //     "https://random-palette-generator.p.rapidapi.com/palette/10/5",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setData(response))
  //     .catch((err) => console.error(err));
  // }, []);

  const elements = data.map(({ palette }) => (
    <div className="grid grid-cols-3 lg:grid-cols-5 mb-12 gap-8 border-b-4 pb-4">
      {palette.map((color) => (
        <ColorBox color={color} />
      ))}
    </div>
  ));

  return (
    <div className="max-w-6xl mx-4 lg:mx-auto">
      <h1 className="text-center mb-12">Color Generator</h1>
      {elements}
    </div>
  );
}

export default App;
