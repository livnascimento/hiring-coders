// Método em desuso

import React from 'react';

class ClassComponent extends React.Component {
    render() {
        const name = 'classe'

        return (
            <div>
                <h2>Componente em formato de {name}</h2>

                <p>Meu primeiro componente em formato de classe</p>
            </div>
        )
    }
}

export default ClassComponent;