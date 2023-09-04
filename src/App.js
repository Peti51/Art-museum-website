import '../src/styles/App.scss';
import { Collections } from './components/Collections';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Tickets } from '../src/components/Tickets';
import { useState } from 'react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Collections');
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/Art-museum' 
            element={
              <Collections
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                headerTitle={headerTitle}
                setHeaderTitle={setHeaderTitle}
              />
            }/>
          <Route path='/Tickets' 
            element={
              <Tickets
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                headerTitle={headerTitle}
                setHeaderTitle={setHeaderTitle}
              />
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
