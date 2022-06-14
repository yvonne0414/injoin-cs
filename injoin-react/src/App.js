// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeHeader from './components/FeHeader';
import FeFooter from './components/FeFooter';
import Chen from './views/frontEnd/Chen/Chen';
import GroupList from './views/frontEnd/GroupList/index';
import GroupDetail from './views/frontEnd/GroupDetail/index';

function App() {
  return (
    <BrowserRouter>
      <FeHeader />
      <main>
        <Routes>
          <Route path="/chen" element={<Chen />} />
          <Route path="/group" exact element={<GroupList />} />
          <Route path="/group/1" exact element={<GroupDetail />}>
            <Route path=":currentPage" element={<GroupDetail />} />
          </Route>
        </Routes>
        <FeFooter />
      </main>
    </BrowserRouter>
  );
}

export default App;
