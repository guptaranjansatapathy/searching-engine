import { useState } from 'react';
import './App.css';
import Cardsection from './components/card-section';
import Searchfilter from './components/search-filter-card-section';

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <header className="App-header">
          <div class="header_search_area input-group">
              <input type="text" class="form-control" placeholder="Search here" onChange={(e) => setQuery(e.target.value)}/>
          </div>
      </header>
      <div class="container content_container">
      { query ? <Searchfilter query={query}/> : null }
      { query ? null : <Cardsection /> }
       </div>
      </div>
  );
}

export default App;
