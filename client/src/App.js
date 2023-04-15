import './App.css';
import Username from './component/Username';
import Password from './component/Password';
import Register from './component/Register';
import Profile from './component/Profile';
import Recovery from './component/Recovery';
import Reset from './component/Reset';
import PageNotFound from './component/PageNotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Username/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/password' element={<Password/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/recovery' element={<Recovery/>}/>
          <Route path='/reset' element={<Reset/>}/>
          <Route path='/pagenotfound' element={<PageNotFound/>}/>
        </Routes>
   </BrowserRouter>
  );
}

export default App;
