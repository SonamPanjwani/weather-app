import { ChangeEvent } from "react";
import { optionType } from "../types/index";
import { Link } from "react-router-dom";

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (options: optionType) => void;
  onSubmit: () => void;
};
const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-screen bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/background.jpg')" }}

        // yaha par img element dalne se pura screen cover ni ho ra tha because
        // vo as a child me tha  main container
        // humara div hai isliye div me inline css deni padi hai
      >
        <div className="flex items-center justify-center text-center h-full w-full ">
          <div
            className=" flex-col justify-center bg-white bg-opacity-20 
           w-1/2 h-2/3 p-4 gap-7
           backdrop:blur-lg drop-shadow-lg rounded-md
        h-500 w-500 items-center"
          >
            <h1 className="text-black text-center text-3xl ">
              Weather Forecast🌤️
            </h1>
            <p className="m-7 p- 4 ">
              Enter and Select a place you want to know the weather report of !
            </p>
            <div className="flex gap-1 justify-center text-center">
              <div className="flex-col text-left gap-0">
                <input
                  type="text"
                  value={term}
                  onChange={onInputChange}
                  placeholder="Enter Your Location"
                  className=" p-1 ml-5 rounded-lg hover: border-black "
                />
                <ul className="mt-1 m-5 rounded-md ">
                  {options.map((option: optionType, index: number) => {
                    return (
                      <li key={option.name + "-" + index}>
                        <button
                          className=" bg-gray-200 p-2 cursor-pointer hover:bg-gray-400 w-[160px] text-left"
                          onClick={() => onOptionSelect(option)}
                        >
                          {option.name} , {option.country}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <button
                className="p-2 bg-gray-600 rounded-lg cursor-pointer hover:text-lg h-[35px] w-[100px]"
                onClick={onSubmit}
              >
                Search
              </button> */}
              <Link
              to = "/data"
                className="p-2 bg-gray-600 rounded-lg cursor-pointer hover:text-lg h-[35px] w-[100px]"
                onClick={onSubmit}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
