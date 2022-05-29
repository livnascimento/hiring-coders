import React from 'react';
import FunctionalComponent from '../../components/FunctionComponents';
import ClassComponents from '../../components/ClassComponents';
import PartOne from '../../components/Hooks/PartOne';
import ButtonProps from '../../components/Props/Component';

const Home: React.FC = () => {

    return(
        <div>
            <h1>Listando os nossos componentes</h1>
            <FunctionalComponent/>
            <ClassComponents/>
            <PartOne />
            <ButtonProps name="Lívia" />
            <ButtonProps name="Nascimento" />
        </div>
    );
}
export default Home;