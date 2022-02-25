import { Box } from '@mui/material';
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
                    padding: '16px 32px',
                },

                '& > li > a': {
                    textDecoration: 'none',
                    color: '#555555',

                    '&: hover': {
                        color: '#3f50b5'
                    },
                    '&.active': {
                        color: '#3f50b5',
                        textDecoration: 'underline',
                    }
                }
            }}
        >
            <li>
                <NavLink end to="">Description</NavLink>
            </li>
            <li>
                <NavLink end to="additional">Additional</NavLink>
            </li >
            <li>
                <NavLink end to="reviews">Reviews</NavLink>
            </li >
        </Box >
    );
}

export default ProductMenu;