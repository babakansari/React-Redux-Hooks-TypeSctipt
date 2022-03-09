import './App.css';
import { Route, Routes,  } from 'react-router-dom';
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import Header from './components/common/Header'
import PageNotFound from "./PageNotFound";
import RostersPage from "./components/rostering/Rosters";

function App() {  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="about" element={<AboutPage/>} />
        <Route path="rostering" element={<RostersPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
