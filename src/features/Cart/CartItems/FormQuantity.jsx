import { yupResolver } from '@hookform/resolvers/yup';
import FormCartField from 'components/form-controls/FormCartField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from "yup";

FormQuantity.propTypes = {
    onSubmit: PropTypes.func,
};


function FormQuantity({ onSubmit = null }) {
    const product = useSelector(state => state.cart.cartItems)
    const quantity = product[0].quantity
    // console.log(quantity);

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
            quantity: quantity,
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
            <FormCartField name="quantity" label="Quantity" form={form} />
        </form>
    );
}

export default FormQuantity;