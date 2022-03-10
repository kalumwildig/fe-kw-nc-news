import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Article from './Components/Article'
import Topics from './Components/Topics';
import { UserContext } from './Components/Context.js/UserContext';
import {useState} from 'react';
import Accounts from './Components/Accounts';

function App() {
  const [loggedInUser, setLoggedInUser] = useState()


  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/:topic/article/:article_id" element={<Article />} /> 
            <Route path="/topics/:topic/articles" element={<Topics />} />
            <Route path="/accounts" element={<Accounts loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
      </Routes>
      </BrowserRouter>
    </div>
     </UserContext.Provider>
  );
}

export default App;
