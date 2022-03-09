import { Box, Container, Grid, LinearProgress, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { addToCart, setQuantity } from 'features/Cart/cartSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
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
    root: {
        paddingBottom: '24px',
    },

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
    const { params: { productId } } = useMatch("/products/:productId/*");

    const { product, loading } = useProductDetail(productId);
    const dispatch = useDispatch()

    if (loading) {
        return <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%' }}>
            <LinearProgress />
        </Box>
    }

    const handleAddToCartSubmit = ({ quantity }) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity,
        });
        dispatch(action);

        // const quantityProduct = setQuantity({
        //     id: product.id,
        //     quantity
        // })
        // console.log(quantityProduct);
        // dispatch(quantityProduct);
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
                    <Route path="/additional" element={<ProductAdditional />} />
                    <Route path="/reviews" element={<ProductReviews />} />
                </Routes>
            </Container>
        </Box>
    );
}

export default DetailPage;