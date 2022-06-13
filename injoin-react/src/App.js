// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeHeader from './components/FeHeader';
import GroupList from './views/frontEnd/GroupList/index';

function App() {
  return (
    <BrowserRouter>
      <FeHeader />
      <main>
        <Routes>
          <Route path="/group" exact element={<GroupList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
