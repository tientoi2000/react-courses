import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from 'api/productApi';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterSkelatonCategory from '../components/Filters/FilterSkelatonCategory';
import FilterViewer from '../components/FilterViewer';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

const useStyles = makeStyles({
    root: {},

    left: {
        width: '250px'
    },

    right: {
        flex: '1 1 0',
    },

    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',

        marginTop: '30px',
        paddingBottom: '20px',
    }
});

function ListPage(props) {
    const classes = useStyles();

    const history = useNavigate();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 10,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        }
    }, [location.search]);

    const [productList, setProductList] = useState([])
    const [pagination, setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination)
            } catch (error) {
                console.log('Failed to get all products: ', error);
            }

            setLoading(false);
        })();
    }, [queryParams]);


    const handlePageChange = (e, page) => {
        const filters = {
            ...queryParams,
            _page: page,
        }
        history({
            pathname: history.pathname,
            search: queryString.stringify(filters),
        })
    };

    const handleSortChange = (newSortValue) => {
        const filters = {
            ...queryParams,
            _sort: newSortValue,
        }
        history({
            pathname: history.pathname,
            search: queryString.stringify(filters),
        })
    };

    const handleFiltersChange = (newFilters) => {
        const filters = {
            ...queryParams,
            ...newFilters,
        }
        history({
            pathname: history.pathname,
            search: queryString.stringify(filters),
        })
    };

    const setNewFilters = (newFilters) => {
        history({
            pathname: history.pathname,
            search: queryString.stringify(newFilters),
        })
    };


    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>

                            {loading ? <FilterSkelatonCategory length={9} /> : <ProductFilters filters={queryParams} onChange={handleFiltersChange} />}
                        </Paper>
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
                            <FilterViewer filters={queryParams} onChange={setNewFilters} />

                            {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}

                            <Box className={classes.pagination}>
                                <Pagination
                                    color="primary"
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                ></Pagination>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;