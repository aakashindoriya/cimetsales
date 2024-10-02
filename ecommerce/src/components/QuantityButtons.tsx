
const QuantityButtons = () => {

  return (
    <div>
        <button className="text-gray-600 hover:text-gray-800">-</button>
        <input type="number" disabled={true} className="border-2 border-gray-300 w-12 p-2 text-gray-600" value="1" />
        <button className="text-gray-600 hover:text-gray-800">+</button>
  
    </div>
  )
}

export default QuantityButtons