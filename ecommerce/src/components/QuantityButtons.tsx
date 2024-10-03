type QuantityButtonsProps={
  id:number
  quantity:number
  handleQuantityChange: (id: number, type: "inc" | "dec") => void;
}

const QuantityButtons = ({quantity,handleQuantityChange,id}:QuantityButtonsProps) => {

  return (
    <div>
        <button className="text-gray-600 hover:text-gray-800" 
        onClick={()=>handleQuantityChange(id,"dec")}
        >-</button>
        <input type="number" disabled={true} className="border-2 border-gray-300 w-12 p-2 text-gray-600" value={quantity} />
        <button className="text-gray-600 hover:text-gray-800"
        onClick={()=>handleQuantityChange(id,"inc")}
        >+</button>
  
    </div>
  )
}

export default QuantityButtons