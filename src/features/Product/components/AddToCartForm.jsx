import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};


function AddToCartForm({ onSubmit = null }) {
    const schema = yup.object().shape({
        quantity: yup
            .number()
            .required('Please enter quantity')
            .min(1, 'Minimum value is 1')
            .max(20, 'Maximum value is 20')
            .typeError('Please enter a number'),

    });

    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField name="quantity" label="Quantity" form={form} />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width: '250px' }}
                size='large'
            >
                Add to cart
            </Button>

        </form>
    );
}

export default AddToCartForm;