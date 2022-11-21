import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim().toLowerCase());
    setInputValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for gif"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};
