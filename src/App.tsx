import React from 'react';
import Layout from './Componentes/Layout/index'
import GlobalStyled from './styles/Global';
const App:React.FC = () =>{
  return (
    <div className="App">
      <GlobalStyled />
      <Layout>

      </Layout>
    </div>
  );
}

export default App;
