import Home from './Home';
import Update from './Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/Update' element={<Update />}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
