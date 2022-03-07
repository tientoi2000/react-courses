import { Box } from '@mui/material';
import { cartItemsCountSelector } from 'features/Cart/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import EmtyCart from './CartItems/EmtyCart';
import CartProduct from './CartProduct';

CartFeature.propTypes = {

};


function CartFeature() {
    const itemTotal = useSelector(cartItemsCountSelector)

    return (
        <Box>
            {itemTotal > 0 ? <CartProduct /> : <EmtyCart />}
        </Box>

    );
}

export default CartFeature;