import './App.css';
import Layout from './components/layout';
import About from './pages/about';
import Blog from './pages/blog';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
