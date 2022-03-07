import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    photoList: PropTypes.array,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
    photoList: [],
    onPhotoEditClick: null,
    onPhotoRemoveClick: null,
};

function PhotoList(props) {
    const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

    return (
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,

            }}
        >
            <Grid container >
                {photoList.map(photo => (
                    <Grid item
                        key={photo.title}
                        xs={12} sm={6} md={4} lg={3}
                    >
                        <PhotoCard
                            photo={photo}
                            onEditClick={onPhotoEditClick}
                            onRemoveClick={onPhotoRemoveClick}
                        />
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}

export default PhotoList;