import Header from 'components/Header';
import NotFound from 'components/NotFound';
import ProductFeature from 'features/Product';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import CartFeature from './features/Cart';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<CounterFeature />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/products/*" element={<ProductFeature />} />
        <Route path="/cart" element={<CartFeature />} />

        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
