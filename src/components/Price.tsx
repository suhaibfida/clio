interface SrcType {
  src: string;
  width?: string;
}
export const Price = ({ src, width }: SrcType) => {
  return (
    <div className="w-70 text-center text-black  border-2 bg-gray-700 border-gray-500 h-13 rounded-xl mt-3 ml-5">
      <div className="flex">
        <img className={`pl-3 pt-2 ${width}`} src={src} alt="btc" />
        <span className="pl-7 pt-3 text-gray-200 font-bold text-lg">
          $5400000
        </span>
      </div>
    </div>
  );
};

export const Index = () => {
  return (
    <div className="w-70 text-center text-black bg-gray-100 border-3 bg-gray-700 border-gray-500 h-13 rounded-xl mt-3 mb-5 ml-5">
      <div className="flex">
        <span className="bg-red-700 w-8 h-8 mt-2 ml-4 text-center pt-2 text-white font-bold rounded-4xl">
          500
        </span>
        <span className="pl-6 pt-3 text-gray-200 font-bold text-lg">
          $5400000
        </span>
      </div>{" "}
      <span></span>
    </div>
  );
};
