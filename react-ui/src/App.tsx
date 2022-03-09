import './App.css';
import { Route, Routes,  } from 'react-router-dom';
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import Header from './components/common/Header'
import PageNotFound from "./PageNotFound";
import RostersPage from "./components/rostering/Rosters";
import Container from '@material-ui/core/Container';

function App() {  
  return (
    <div className="App">
      <Container maxWidth="md">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
          <Route path="about" element={<AboutPage/>} />
          <Route path="rostering" element={<RostersPage/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
