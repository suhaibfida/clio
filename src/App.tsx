import "./App.css";
import { Price, Index } from "./components/Price";

function App() {
  return (
    <>
      <div className="flex flex-col h-auto w-80 font-bold  bg-slate-900 text-white ">
        <div className="underline text-center text-purple-100 bg-gray-800 text-2xl h-13 pt-2">
          Clio
        </div>
        <Price src={"./btc.svg"} width={"w-12 h-12 pl-4"} />
        <Price src={"./eth.svg"} width={"w-11 h-11 pl-4"} />
        <Price src={"./sol.svg"} width={"w-11 h-11 pl-5"} />
        <Price src={"./gold.png"} width={"w-12 h-10 pt-1"} />
        <Price src={"./silver.png"} width={"w-11 h-9"} />
        <Index />
        <span className="text-center text-gray-200 mb-3">
          Created by Suhaib
        </span>
      </div>
    </>
  );
}

export default App;
