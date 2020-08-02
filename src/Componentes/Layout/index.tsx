import React from 'react';

import Sign from '../Cadastro/index';
import {Conteiner} from './style';
import Header from '../aparencia'
const Layout: React.FC = () =>{
    return(
        <Conteiner>
            <Sign />
            <Header />
        </Conteiner>
    )
}
export default Layout;