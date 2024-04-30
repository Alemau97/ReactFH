import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Taylor Swift', 'Post Malone','Game of Thrones']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory newCategory={onAddCategory} />
        {
            categories.map((category) => <GifGrid category={category} key={category} />)
        }

    </>    
  )
}
