import {useContext} from "react";
import {ProductsContext} from "./ProductsContext";

export default function Product({_id,name,price,description,picture}) {
  const {setSelectedProducts} = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts(prev => [...prev,_id]);
  }
  return (
    <div className="w-52">
      <div className="bg-white-100 p-5 rounded-xl">
        {/* Apply styles to the img element */}
        <img
          src={picture}
          alt=""
          style={{
            border: '1px solid #333', // Set the border style
            borderRadius: '20px',      // Optionally, set border-radius for rounded corners
            backgroundColor: 'transparent', 
            display: 'block',  
            padding: '10px'       
          }}
        />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p>
      <div className="flex mt-1">
        <div className="text-2xl font-bold grow">{price}円</div>
        <button onClick={addProduct} className="bg-yellow-300 text-white py-1 px-3 rounded-xl">+</button>
      </div>
    </div>
  );
}
