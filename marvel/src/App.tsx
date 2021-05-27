import React from 'react';
import Characters from './page/Characters';
import GlobalStyle from './styles/global';


const App: React.FC = () => {

  return (
    <div>
      <Characters/>
      <GlobalStyle/>
    </div>
    ); 
  
};

export default App;
