import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';


const useStyles = makeStyles({
    root: {},

    left: {
        width: '400px',
        padding: '12px',
        borderRight: '1px solid #ccc',
    },

    right: {
        flex: '1 1 0',
        padding: '12px',
    },
});

function DetailPage() {
    const classes = useStyles();
    const { params: { productId } } = useMatch("/products/:productId");

    const { product, loading } = useProductDetail(productId);

    if (loading) {
        return <Box>Loading...</Box>
    }

    const handleAddToCartSubmit = (formValues) => {
        console.log(formValues);
    }

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu />
                <Routes>
                    <Route index element={<ProductDescription product={product} />} />
                    <Route path="additional" element={<ProductAdditional />} />
                    <Route path="reviews" element={<ProductReviews />} />
                </Routes>
            </Container>
        </Box>
    );
}

export default DetailPage;