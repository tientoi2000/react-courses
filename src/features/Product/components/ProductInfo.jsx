import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles({
    root: {
        paddingBottom: '16px',
        borderBottom: '1px solid #ccc',
    },

    priceBox: {
        padding: '16px',
        backgroundColor: '#eae9e9',
    },

    originalPrice: {
        marginRight: '16px',
        textDecoration: 'line-through',
    },
});

function ProductInfo({ product = {} }) {
    const classes = useStyles();
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h4">
                {name}
            </Typography>
            <Typography variant="body2" mt={2} mb={2} >
                {shortDescription}
            </Typography>

            <Box className={classes.priceBox}>
                <Box
                    sx={{
                        marginRight: '24px',
                        fontSize: 26,
                        fontWeight: 'bold',
                    }}
                    component="span"
                >
                    {formatPrice(salePrice)}
                </Box>

                {promotionPercent > 0 && (
                    <>
                        <Box className={classes.originalPrice} component="span">
                            {formatPrice(originalPrice)}
                        </Box>
                        <Box component="span">
                            {`-${product.promotionPercent}%`}
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default ProductInfo;