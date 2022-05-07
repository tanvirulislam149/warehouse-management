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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/manageItems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/product/:id" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
