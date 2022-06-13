// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeHeader from './components/FeHeader';
import FeFooter from './components/FeFooter';
import GroupList from './views/frontEnd/GroupList/index';
import Chen from './views/frontEnd/Chen/Chen';



function App() {
  return (
    <BrowserRouter>
      <FeHeader />
      <main>
        <Routes>
          <Route path="/group" exact element={<GroupList />} />
          <Route path="/chen" element={<Chen />} />
        </Routes>
        <FeFooter />
      </main>
    </BrowserRouter>
  );
}

export default App;
