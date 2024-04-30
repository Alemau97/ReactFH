import { useState } from "react";

export const AddCategory = ({newCategory}) => {

    const [addCategory, setAddCategory] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(addCategory.trim().length <= 1) return;
        newCategory(addCategory.trim());
        setAddCategory('');

    }

    const handleOnChange = ({target}) => {
        setAddCategory(target.value);
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Add new category" value={addCategory} onChange={handleOnChange}/>
        <button type="submit">Add Category</button>
    </form>
  )
}
