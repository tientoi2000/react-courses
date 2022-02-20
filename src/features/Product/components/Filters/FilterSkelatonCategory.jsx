import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from '@mui/styles';
import React from 'react';

FilterSkelatonCategory.propTypes = {

};

const useStyles = makeStyles({
    root: {},

    item: {
        paddingTop: '8px',
    }
})

function FilterSkelatonCategory(props) {
    const classes = useStyles();
    return (
        <Box sx={{ width: 210, paddingLeft: 2, }}>
            <Skeleton className={classes.item} />
            <Skeleton className={classes.item} />
            <Skeleton className={classes.item} />
            <Skeleton className={classes.item} />
            <Skeleton className={classes.item} />
            <Skeleton className={classes.item} />
            <Skeleton className={classes.item} />

        </Box>
    );
}

export default FilterSkelatonCategory;