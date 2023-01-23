import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
// import { GoogleLogin } from 'react-google-login';
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Icon from './Icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input.js';
import { signin, signup } from '../../actions/auth';

import useStyles from './AuthStyles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignedUp) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const switchMode = () => {
        setIsSignedUp((prevMode) => !prevMode);
        setShowPassword(false);
    };

    /* Google OAuth Use */
    const googleSuccess = async (credentialResponse) => {
        const result = credentialResponse;
        const token = result.credential;

        try {
            console.log(credentialResponse);
            dispatch({ type: 'AUTH', data: { result, token } })

            history.push('/');
        } catch (error) {
            console.log(error);
            console.log('Login Failed');
        }
    };

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
                <Typography variant="h5">{isSignedUp ? 'Sign Up' : 'Sign In'}</Typography>
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
                        {/* <Button className={classes.googleButton} color='primary' fullWidth onClick={() => useGoogleLogin} startIcon={<Icon />} variant="contained">
                            Sign in with Google
                        </Button> */}
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
                        {/* <GoogleLogin
                            render={(renderProps) => (
                                <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                            // useOneTap
                        /> */}
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

export default Auth
