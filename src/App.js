
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Commensts from "./components/Comments/Commensts";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from "./PostDetails/PostDetails";



function App() {

  return (
    <>
   

    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<NoMatch/>}/>
        <Route path="/postDetails/:postId" element={<PostDetails/>}></Route>
        <Route path="/comments/:postId" element={<Commensts></Commensts>}></Route>
    </Routes>
    </>
  );
}

export default App;
