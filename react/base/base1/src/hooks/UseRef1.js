import  { useRef } from 'react';

const Index = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

export default Index;