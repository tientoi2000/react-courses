import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';


function ProductFeature() {
    return (
        <Box pt={4}>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path=":productId/*" element={<DetailPage />} />
            </Routes>
        </Box>
    );
}

export default ProductFeature;