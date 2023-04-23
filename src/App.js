import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { SHOP_ROUTER } from './constants/router';
import CreatePage from './pages/CreatePage';
import AllPage from './pages/AllPage';
import NewPage from './pages/NewPage';
import DoingPage from './pages/DoingPage';
import DonePage from './pages/DonePage';
import EditTaskPage from './pages/EditTaskPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{ display: 'grid', gridTemplateColumns: "200px auto" }}>
          <Sidebar />
          <Routes>
            <Route path={SHOP_ROUTER.CREATE_TASK} element={<CreatePage />} />
            <Route path={SHOP_ROUTER.ALL_TASK} element={<AllPage />} />
            <Route path={SHOP_ROUTER.EDIT_TASK} element={<EditTaskPage />} />
            <Route path={SHOP_ROUTER.NEW_TASK} element={<NewPage />} />
            <Route path={SHOP_ROUTER.DOING_TASK} element={<DoingPage />} />
            <Route path={SHOP_ROUTER.DONE_TASK} element={<DonePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
