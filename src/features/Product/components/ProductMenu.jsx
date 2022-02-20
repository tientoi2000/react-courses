import { Box, Link } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

ProductMenu.propTypes = {

};

function ProductMenu(props) {

    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
                listStyleType: 'none',

                '& > li': {
                    padding: '16px 32px'
                },

                '& > li > a': {
                    color: '#555555',

                    '&: hover': {
                        color: '#3f50b5'
                    },
                    '&.active': {
                        color: '#3f50b5',
                    }
                }
            }}
        >
            <li>
                <Link
                    component={NavLink}
                    underline="hover"
                    to=""
                >
                    Description
                </Link>

            </li>
            <li>
                <Link
                    component={NavLink}
                    underline="hover"
                    to="additional"
                >
                    Additional
                </Link>
            </li>
            <li>
                <Link
                    component={NavLink}
                    underline="hover"
                    to="reviews"
                >
                    Reviews
                </Link>
            </li>
        </Box>
    );
}

export default ProductMenu;