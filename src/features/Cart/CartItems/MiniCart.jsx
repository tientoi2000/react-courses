import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './miniCart.scss';
import { useDispatch } from 'react-redux';
import { hideMiniCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

MiniCart.propTypes = {
    onHideClick: PropTypes.func,
};

function MiniCart(props) {
    const history = useNavigate();
    const dispatch = useDispatch();
    const handleHideMiniCart = (state) => {
        const action = hideMiniCart(state)
        dispatch(action);
    }

    const handleToCart = (state) => {
        const action = hideMiniCart(state)
        dispatch(action);
        history('/cart')
    }

    return (
        <Box className="root">
            <Paper elevation={4}>
                <span onClick={handleHideMiniCart} className="hide-cart">&times;</span>
                <div className="sucsess-cart">
                    <CheckCircleIcon />
                    <Typography variant="body2">Thêm vào giỏ hàng thành công!</Typography>
                </div>
                <div className="btn-cart">
                    <Button
                        type="submit"
                        variant="contained"
                        size='small'
                        onClick={handleToCart}
                    >
                        Thêm giỏ hàng và thanh toán
                    </Button>
                </div>
            </Paper>
        </Box>
    );
}

export default MiniCart;