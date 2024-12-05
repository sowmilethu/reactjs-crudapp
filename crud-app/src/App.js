 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateData from './Crud/CreateData';
import Edit from './Crud/Edit';
import GetData from './Crud/GetData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       

       <BrowserRouter> 
             <Routes>
        <Route path='/' element={<GetData/>}/>
        <Route path='/new' element={<CreateData/>}/>
        <Route path='/edit' element={<Edit/>}/>
       </Routes>
          </BrowserRouter> 


          
         
        
      </header>
      
    </div>
  );
}


export default App;
