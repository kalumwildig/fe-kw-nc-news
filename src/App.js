import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Article from './Components/Article'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<CreateUser />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/items" element={<Items />} /> */}
            <Route path="/topics/:topic/article/:article_id" element={<Article />} /> 
      </Routes>
      </BrowserRouter>
    </div>
        
  );
}

export default App;
