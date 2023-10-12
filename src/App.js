import './App.css';
import CompA from './components/CompA.js';

import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';


function App() {
  const details=[
    {
      name:"Amulya Machaganti",
      roll:"636"
    },
    {
      name:"Ammu Amulya",
      roll:"21-636"
    }
  ]
   
  return (
    <>
    <BrowserRouter>
        <Link to="/CompA">click to compA</Link>
        <Routes>
             
           <Route path='/CompA' element={<CompA data={details}/>}>
           

           </Route>

        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
