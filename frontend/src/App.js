import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home2 from './pages/Home2';
import Newmedcine from './pages/Newmedcine';
import Myads from './pages/Myads';
import Navibar from './pages/Navibar';
import Footer from './pages/Footer';
import Account from './pages/Account';
import Chat from './pages/Chat';
// import Home from './pages/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navibar />
        <Routes>

          <Route path='/login' element={< Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='/home2' element={< Home2 />} />
          <Route path='/newmedicine/:id' element={< Newmedcine />} />
          <Route path='/myads' element={< Myads />} />
          <Route path='/account' element={< Account />} />
          <Route path='/chat' element={< Chat />} />

        </Routes>
        <Footer />

      </BrowserRouter>


    </>
  );
}

export default App;
