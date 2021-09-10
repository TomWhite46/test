import {useState} from "react";

const ProductTable = () => {
    const products = ["tomatoes", "sausages", "nice crispy bacon"]
    
    const [filtered, setFiltered] = useState(["tomatoes", "sausages", "nice crispy bacon"]);

    

    return (
        <>
           <input type="text"
           onChange={e => setFiltered(products.filter(product => product.includes(e.target.value)))}/>
            <p>{filtered}</p>
        </>
    )
}


export default ProductTable;