import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './emtyCart.scss';

EmtyCart.propTypes = {

};

function EmtyCart(props) {
    const history = useNavigate()
    const handleClick = () => {
        history('/products')
    }

    return (
        <div className="emty-cart">
            <div className="img">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png" alt="" width="100%" />
            </div>
            <div className="span">
                <span>Giỏ hàng của bạn còn trống</span>
            </div>
            <div className="btn">
                <Button
                    variant="contained"
                    size='large'
                    onClick={handleClick}
                >
                    MUA NGAY
                </Button>
            </div>
        </div>
    );
}

export default EmtyCart;