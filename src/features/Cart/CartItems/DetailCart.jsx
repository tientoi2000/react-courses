import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { STATIC_HOST } from 'constants';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { makeStyles } from '@mui/styles';

DetailCart.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles({
    root: {
    },

    left: {
        width: "80px"
    },

    right: {
        flex: '1 1 0',
    },

    centerleft: {
        width: "260px"
    },
    centeright: {
        width: "190px"
    }
});

function DetailCart({ product = {} }) {
    const classes = useStyles();

    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER;

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <img src={thumbnailUrl} alt={product.name} width="100%" />
                        </Paper>
                    </Grid>

                    <Grid item className={classes.centerleft}>
                        <Typography >

                        </Typography>
                    </Grid>

                    <Grid item className={classes.centeright}>
                        <Paper elevation={0}>
                        </Paper>
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default DetailCart;