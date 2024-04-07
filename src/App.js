import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
