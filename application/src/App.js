// src/App.js
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const AdminProducts = lazy(() => import('./pages/AdminProducts'));
const Wishlist = lazy(() => import('./pages/Wishlist'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
