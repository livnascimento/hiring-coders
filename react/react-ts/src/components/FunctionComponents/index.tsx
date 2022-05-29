import React, { useEffect, useState } from 'react';

const FunctionComponent: React.FC = () => {
    const [name, setName] = useState<string>();

    useEffect(() => {
        setName('Lívia Nascimento')
    }, [])

    return (
        <div>
            <h2>Este componente está no formato {name}</h2>
            <p>Meu primeiro componente funcional</p>
        </div>
    )
}

export default FunctionComponent;