import { Price, Index } from "./components/Price";
import { useEffect, useState } from "react";
import {
  btcApi,
  ethApi,
  solApi,
  goldApi,
  silverApi,
  indexApi,
} from "./components/api";

function App() {
  const [btcPrice, setBtcPrice] = useState("");
  const [ethPrice, setEthPrice] = useState("");
  const [solPrice, setSolPrice] = useState("");
  const [goldPrice, setGoldPrice] = useState<number | null>(null);
  const [silverPrice, setSilverPrice] = useState("");
  const [indexPrice, setIndexPrice] = useState("");

  useEffect(() => {
    try {
      async function load() {
        const btcData = await btcApi();

        setBtcPrice(btcData.symbols[0].last);
        const ethData = await ethApi();

        setEthPrice(ethData.symbols[0].last);
        const solData = await solApi();

        setSolPrice(solData.symbols[0].last);

        const goldData = await goldApi();

        setGoldPrice(goldData.price.toFixed(2));

        const silverData = await silverApi();

        setSilverPrice(silverData.price.toFixed(2));

        const indexData = await indexApi();
        const index = indexData.price;
        setIndexPrice(Number(index).toFixed());
      }

      load();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-700 w-80 font-mono text-white ">
        <div className="underline text-center text-slate-300 bg-gray-800 text-2xl h-13 pt-2">
          Clio
        </div>
        <Price
          src={"./btc.svg"}
          width={"w-15 h-15 pr-5 pb-2 mr-1 pl-2"}
          price={btcPrice}
        />
        <Price
          src={"./eth.svg"}
          width={"w-15 h-15 pl-3 pb-2 mr-1 pr-6"}
          price={ethPrice}
        />
        <Price
          src={"./sol.svg"}
          width={"w-16 h-16 pl-3 pb-2 pr-6"}
          price={solPrice}
        />
        <Price
          src={"./gold.png"}
          width={"w-11 h-9 mt-1 mr-5 pt-1"}
          price={goldPrice}
        />
        <Price
          src={"./silver.png"}
          width={"w-11 h-5 mt-1 mr-5 h-9 pl-1"}
          price={silverPrice}
        />
        <Index price={indexPrice} />
        <span className="text-center text-gray-200 mb-3">
          Created by Suhaib
        </span>
      </div>
    </>
  );
}

export default App;
