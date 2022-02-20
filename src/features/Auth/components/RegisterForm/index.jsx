import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LinearProgress } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};




const theme = createTheme();

function RegisterForm(props) {
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your full name')
            .test('should has at least two words', 'Please enter at least two words.', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('Please enter your email.')
            .email('Please enter a valid email address.'),
        password: yup.string().required('Please enter your password')
            .min(6, 'Please enter at least 6 characters.'),
        retypePassword: yup
            .string()
            .required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Password does not match.'),
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    const { isSubmitting } = form.formState;

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        position: 'relative',
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {isSubmitting && <LinearProgress
                        sx={{
                            position: 'absolute',
                            top: '-16px',
                            left: 0,
                            right: 0,
                        }} />
                    }

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create new account
                    </Typography>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <InputField name="fullName" label="Full Name" form={form} />
                        <InputField name="email" label="Email" form={form} />

                        <PasswordField name="password" label="Password" form={form} />
                        <PasswordField name="retypePassword" label="Retype Password" form={form} />

                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            size='large'
                        >
                            Create an account
                        </Button>

                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default RegisterForm;