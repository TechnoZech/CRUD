import Home from './Home';
import Update from './Update';
import Upload from './Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/Update' element={<Update />}></Route>
        <Route exact path='/Upload' element={<Upload />}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
