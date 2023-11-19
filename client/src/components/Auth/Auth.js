import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Icon from './Icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input.js';
import { signin, signup } from '../../actions/auth';
import decode from 'jwt-decode';

import useStyles from './AuthStyles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let errorMessage;
        if (isSignedUp) {
            errorMessage = await dispatch(signup(formData, history));
        } else {
            errorMessage = await dispatch(signin(formData, history));
        }
    
        if (errorMessage) {
            setError(errorMessage); // Set the error message
            setFormData(initialState); // Clear the form data
        }
    };

    const handleChange = (e) => {
        if (error) setError('');  // reset to empty if error
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignedUp((prevMode) => !prevMode);
        setShowPassword(false);
    };

    /* Google OAuth Use - On Success */
    const googleSuccess = async (credentialResponse) => {
        const token = credentialResponse?.credential;
    
        if (!token) {
            console.log('Google Sign In was unsuccessful. Try Again Later.');
            return;
        }
    
        try {
            const result = decode(token); // Decode the token to get user data
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');
        } catch (error) {
            console.log(error);
            console.log('Login Failed');
        }
    };

    /* Google OAuth Use - On Failure */
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again Later.");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elvation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant="h5">
                    {isSignedUp ? 'Sign Up' : 'Sign In'}
                </Typography>

                {error && (
                    <Typography color="error">{error}</Typography>
                )}

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignedUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignedUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignedUp ? 'Sign Up' : 'Sign In' }
                    </Button>

                    <GoogleOAuthProvider clientId="591910231618-2071au6uof6f264j2rrqs76oq1r6q11c.apps.googleusercontent.com">

                        <Button 
                            className={classes.googleButton} 
                            color='primary' 
                            onClick={() => useGoogleLogin} 
                            startIcon={<Icon />} 
                            variant="contained">
                                Google Sign-in Below
                        </Button>

                        <GoogleLogin
                            onSuccess={googleSuccess}
                            onError={() => {
                                console.log('Google Login Failed');
                            }}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        
                        {/* Client ID: 591910231618-2071au6uof6f264j2rrqs76oq1r6q11c.apps.googleusercontent.com
                            Client Secret: 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 */}
                            
                    </GoogleOAuthProvider>

                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignedUp ? 'Already have an account? Sign In.' : "Don't have an account? Sign Up!" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
