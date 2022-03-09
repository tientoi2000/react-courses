import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cartItemsCountSelector } from 'features/Cart/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import DetailCart from './CartItems/DetailCart';
import HeadingCart from './CartItems/HeadingCart';
import TotalCart from './CartItems/TotalCart';
import './cartProduct.scss';

CartProduct.propTypes = {

};

const useStyles = makeStyles({
    root: {},

    left: {
        flex: '1 1 0',
    },

    right: {
        width: '270px'
    },
});
function CartProduct() {
    const classes = useStyles();
    const itemTotal = useSelector(cartItemsCountSelector)
    const product = useSelector(state => state.cart)
    const detailItem = product.cartItems
    console.log(detailItem);
    // console.log(detailItem);

    return (

        <Box>
            <Container>
                <Typography variant="h6" mt={4} mb={2} >
                    {itemTotal > 0 ? `GIỎ HÀNG(${itemTotal} sản phẩm)` : "GIỎ HÀNG"}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item >
                        <Paper elevation={0}>
                            <HeadingCart />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <DetailCart product={detailItem} />
                        </Paper>
                    </Grid>

                    <Grid item className={classes.right}>
                        <TotalCart />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default CartProduct;