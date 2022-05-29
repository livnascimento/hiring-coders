import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '../views/Home'
import Contato from '../views/Contato'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <h2>Esse é o projeto</h2>
                <Link to="/">Home</Link>
                <Link to="/contato">Contatos</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default Router;