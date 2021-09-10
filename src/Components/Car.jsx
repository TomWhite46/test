import {useState} from "react";

const Car = () => {

    const [brand, setBrand] = useState('Ford');
    const [model, setModel] = useState('Mondeo');
    const [colour, setColour] = useState('Rainbow');
    const [year, setYear] = useState('1843');

    

    return(
        <>
            <h1>Here is my car:</h1>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Colour: {colour}</p>
            <p>Year: {year}</p>
            <form>
                <label for="brand">Brand:</label>
                <input type="text" id="brand" value={brand}
                onChange={e => setBrand(e.target.value)}/>
                <br/>
                <label for="model">Model:</label>
                <input type="text" id="model" value={model}
                onChange={e => setModel(e.target.value)}/>
                <br/>
                <label for="colour">Colour</label>
                <input type="text" id="colour" value={colour}
                onChange={e => setColour(e.target.value)}/>
                <br />
                <label for="year">Year</label>
                <input type="number" id="year" value={year}
                onChange={e => setYear(e.target.value)}/>
                <br />
            </form>
        </>
    )

}
export default Car;