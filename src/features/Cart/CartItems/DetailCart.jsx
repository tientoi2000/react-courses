import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Container, Grid, Paper } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils';
import { addToCart, removeFromCart } from '../cartSlice';
import './detailCart.scss';
import FormQuantity from './FormQuantity';
// import { cartTotalSelector } from '../selectors';

function DetailCart(props) {
    const product = props;
    const productDetails = product.product;
    const dispatch = useDispatch();
    const history = useNavigate();
    // const cartTotal = useSelector(cartTotalSelector)


    const handleFormQuantitySubmit = ({ quantity }) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity,
        });
        dispatch(action);
    }

    const handleDeleteCart = () => {
        const removeCartItem = productDetails[0].id;
        const action = removeFromCart(removeCartItem);
        dispatch(action);
    }

    const handleClick = () => {
        history(`/products/${productDetails[0].id}`)
    }

    // const handleToDetails () => {

    // }
    // console.log(productDetails[0].id);

    return (
        <Box>

            <Container>
                <Paper elevation={0}>
                    {productDetails.map(product => (
                        <Grid container key={product.id}>
                            <div className="detailt-product">
                                <img src={product.product.thumbnail
                                    ? `${STATIC_HOST}${product.product.thumbnail?.url}`
                                    : THUMBNAIL_PLACEHOLDER} alt={product.product.name} width="100%" onClick={handleClick} />
                                <div className="description" onClick={handleClick}>
                                    {product.product.shortDescription}
                                </div>
                                <div className="price">
                                    {formatPrice(product.product.salePrice)}

                                    {product.product.promotionPercent > 0 && (
                                        <>
                                            <div className="originalPrice">
                                                {formatPrice(product.product.originalPrice)}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="form-quantity">
                                    <FormQuantity onSubmit={handleFormQuantitySubmit} />
                                </div>
                                <div className="delete-cart" >
                                    <DeleteIcon onClick={handleDeleteCart} />
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailCart;