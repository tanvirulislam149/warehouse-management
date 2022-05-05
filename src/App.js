import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Blogs from './Component/Blogs/Blogs';
import MyItems from './Component/MyItems/MyItems';
import Header from './Component/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
