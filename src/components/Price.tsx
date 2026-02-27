interface SrcType {
  src: string;
  width?: string;
  price: string | number | null;
}
interface Index {
  price: string;
}
export const Price = ({ src, width, price }: SrcType) => {
  return (
    <div className="w-70 text-center text-black  border-2 border-gray-500 h-13 rounded-xl mt-3 ml-5">
      <div className="flex">
        <img className={` ${width}`} src={src} alt="btc" />
        <span className=" pt-3 text-gray-300 font-bold text-lg">
          {"$"}
          {price}
        </span>
      </div>
    </div>
  );
};

export const Index = ({ price }: Index) => {
  return (
    <div className="w-70 text-center text-black border-3 border-gray-500 h-13 rounded-xl mt-3 mb-6 ml-5">
      <div className="flex">
        <span className="bg-red-700 w-9 h-9 mt-2 ml-1 text-center pt-2 text-md text-white font-bold rounded-4xl">
          500
        </span>
        <span className="pl-6 pt-3 text-gray-300 font-bold text-lg">
          {"$"}
          {price}
        </span>
      </div>{" "}
      <span></span>
    </div>
  );
};
