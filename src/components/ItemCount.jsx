import { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    return (
        <>
            <p>{contador}</p>
            <button onClick={() => setContador(contador - 1)}>➖</button>
            <button onClick={() => setContador(contador + 1)}>➕</button>
            <button onClick={() => setContador(contador - contador)}>✔</button>
        </>
    )
}

export default ItemCount