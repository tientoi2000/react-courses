import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from 'features/Cart/selectors';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DetailCart from './CartItems/DetailCart';
import TotalCart from './CartItems/TotalCart';

CartFeature.propTypes = {

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
function CartFeature() {
    const classes = useStyles();
    const cartTotal = useSelector(cartTotalSelector)
    const itemTotal = useSelector(cartItemsCountSelector)
    const product = useSelector(state => state.cart)


    return (
        <Box>
            <Container>
                <Typography variant="h6" mt={4} mb={2} >
                    {itemTotal > 0 ? `GIỎ HÀNG(${itemTotal} sản phẩm)` : "GIỎ HÀNG"}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <DetailCart />
                        </Paper>
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <TotalCart />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default CartFeature;