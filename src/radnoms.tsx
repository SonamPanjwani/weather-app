import { Route, Routes } from "react-router-dom";
import Forecast from "./Components/Forecast";
import Search from "./Components/Search";
import useForecast from "./hooks/useForecast";
//import { BrowserRouter as Route, Routes } from "react-router-dom";
//import { forecastType } from "./types";
//import { useState } from "react";

const App: React.FC = () => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-screen bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/background.jpg')" }}

        // yaha par img element dalne se pura screen cover ni ho ra tha because
        // vo as a child me tha  main container
        // humara div hai isliye div me inline css deni padi hai
      >

        <Routes>
          {/* <Route path ="/" element=
          {
            forecast ?
          <Forecast data = {forecast}/>
          :<Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
        }
          /> */}

        </Routes>
        {forecast ? (
          <Forecast data={forecast} />
        ) : (
          <Search
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </>
  );
};

export default App;
