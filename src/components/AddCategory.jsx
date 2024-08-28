import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState(['One Punch'])

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = ({ target }) => {
        event.preventDefault();
        const valor = inputValue.trim();
        if (valor.length <= 1) return;
        onNewCategory(valor);
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
