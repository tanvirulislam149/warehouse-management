import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Blogs from './Component/Blogs/Blogs';
import MyItems from './Component/MyItems/MyItems';
import Header from './Component/Header/Header';
import ManageItems from './Component/ManageItems/ManageItems';
import ItemDetail from './Component/TopItems/ItemDetail/ItemDetail';
import AddItem from './Component/AddItem/AddItem';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register';
import RequireAuth from './Component/RequiredAuth';
import PageNotFound from './Component/PageNotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/manageItems" element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
        <Route path="/addItem" element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path="/product/:id" element={<RequireAuth><ItemDetail></ItemDetail></RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myItems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
