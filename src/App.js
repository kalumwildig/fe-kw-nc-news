import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Topics from './Components/Topics';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/:topic/articles" element={<Topics />} />
            {/* <Route path="/topics/football/articles" element={<Football />} />
            <Route path="/topics/cooking/articles" element={<Cooking />} /> */} */}
      </Routes>
      </BrowserRouter>
    </div>
        
  );
}

export default App;
