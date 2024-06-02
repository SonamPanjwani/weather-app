import { Routes, Route } from "react-router-dom";
import Forecast from "./Components/Forecast";
import Search from "./Components/Search";
import useForecast from "./hooks/useForecast";

const App: React.FC = () => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-screen bg-no-repeat"
        style={{ backgroundImage: "url('https://imgur.com/fSotL2o')" }}

        // yaha par img element dalne se pura screen cover ni ho ra tha because
        // vo as a child me tha  main container
        // humara div hai isliye div me inline css deni padi hai
      >
        <Routes>
          <Route
            path="/"
            element={
              <Search
                term={term}
                options={options}
                onInputChange={onInputChange}
                onOptionSelect={onOptionSelect}
                onSubmit={onSubmit}
              />
            }
          />
          {forecast && (
            <Route
              path="/forecastData"
              element={<Forecast data={forecast} />}
            />
          )}
        </Routes>
      </div>
    </>
  );
};

export default App;
