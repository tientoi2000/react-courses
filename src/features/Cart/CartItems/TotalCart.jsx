import React from 'react';
import { Box, Button, Grid, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '../selectors';
import { formatPrice } from 'utils';
import './totalCart.scss'
import { useNavigate } from 'react-router-dom';


TotalCart.propTypes = {

};

function TotalCart(props) {
    const cartTotal = useSelector(cartTotalSelector);
    const history = useNavigate();
    const handleClick = () => {
        alert("Bạn đã đặt hàng thành công")
        history('/products')
    }

    return (
        <Box>
            <Paper elevation={0}>
                <Grid container className="provisional">
                    <Grid item className="item1">
                        Tạm tính
                    </Grid>
                    <Grid item className="item2">
                        {formatPrice(cartTotal)}
                    </Grid>
                </Grid>
                <Grid container className="total">
                    <Grid item className="item3">
                        Tổng cộng
                    </Grid>
                    <Grid item className="item4">
                        {formatPrice(cartTotal)}
                    </Grid>
                </Grid>
            </Paper>
            <Button
                fullWidth
                variant="contained"
                size='large'
                onClick={handleClick}
            >
                MUA HÀNG
            </Button>
        </Box >
    );
}

export default TotalCart;