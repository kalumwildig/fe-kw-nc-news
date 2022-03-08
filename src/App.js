import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Article from './Components/Article'
import Topics from './Components/Topics';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/:topic/article/:article_id" element={<Article />} /> 
            <Route path="/topics/:topic/articles" element={<Topics />} />

      </Routes>
      </BrowserRouter>
    </div>
        
  );
}

export default App;
