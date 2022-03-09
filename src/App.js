import Header from 'components/Header';
import NotFound from 'components/NotFound';
import Photo from 'features/Photo';
import ProductFeature from 'features/Product';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AlbumFeature from './features/Album';
import CartFeature from './features/Cart';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ProductFeature />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/products/*" element={<ProductFeature />} />
        <Route path="/cart" element={<CartFeature />} />
        <Route path="/photos/*" element={<Photo />} />

        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
