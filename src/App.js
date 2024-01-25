import {Routes,Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container mt-3">
        {/*主要輸出內容的區塊 */}
          <Routes>
            {/* 對應路徑:進到這個路徑時要渲染哪個元件 */}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/album" element={<AlbumLayout/>}>
              {/* 相當於/album/index 輸入這個路徑時就會帶入Outlet區塊的內容 會對應到路由表上的檔案:AlbumIndex*/}
              {/* 點選項簿時不會直接帶入子路徑 */}
              {/* <Route path="index" element={<AlbumIndex/>}></Route> */}
              {/* 代表子路由預設呈現的元件 */}
              <Route index element={<AlbumIndex/>}></Route>
            </Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
