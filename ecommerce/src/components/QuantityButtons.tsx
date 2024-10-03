type QuantityButtonsProps={
  id:number
  quantity:number
  handleQuantityChange: (id: number, type: "inc" | "dec") => void;
}

const QuantityButtons = ({ quantity, handleQuantityChange, id }: QuantityButtonsProps) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => handleQuantityChange(id, "dec")}
      >
        -
      </button>
      <input
        type="number"
        disabled={true}
        className="w-12 h-10 text-center p-2 border-2 border-gray-300 rounded text-gray-600 bg-gray-100"
        value={quantity}
      />
      <button
        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => handleQuantityChange(id, "inc")}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
