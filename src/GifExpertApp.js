import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function GifExpertApp() {
    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = (newCategory) => {
    //     console.log(newCategory);
    //     setCategories([...categories, 'HunterXHunter']);
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}



            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={ category } category={ category } />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp

