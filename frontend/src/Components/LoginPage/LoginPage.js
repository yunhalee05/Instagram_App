import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png'
import fb from '../../images/fb.png'
import appstore from '../../images/app.png'
import playstore from '../../images/play.png'
import './LoginPage.css'
import Signin from '../SignIn/Signin';
import Signup from '../Signup/Signup';
 
function LoginPage() {

    const [isLogin, setisLogin] = useState(true)

    const changeLogin=() =>{
        setisLogin(!isLogin);
    }

    return (
        <div>
            <Grid container>
                <Grid  item xs={3} >
                </Grid>
                <Grid  item xs={6} >
                    <div className="loginpage__main">
                        <div>
                            <img src={inst_image} width="454px" />
                        </div>
                        <div>
                            <div className="loginpage_rightcomponent">
                                <img className="loginpage__logo" src={insta_logo}  />
                                <div className="loginpage__signin">
                                    {
                                        isLogin? <Signin/> :<Signup/>
                                    }
                                    <div className="loginpage__ordiv">
                                        <div className="loginpage__divider"></div>
                                        <div className="loginpage__or">OR</div>
                                        <div className="loginpage__divider"></div>

                                    </div>
                                    <div className="loginpage__fb"> <img src={fb} width="15px" style={{"marginRight": "5px"}}/> Log in with Facebook</div>
                                    <div className="loginpage__forgot">Forgot password?</div>
                                </div>
                            </div>
                            <div className="loginpage__signupoption">
                                {
                                    isLogin? 
                                        <div className="loginpage___signin">Don't have an account?<span onClick={changeLogin} style={{"fontWeight":"bold", "color":"#0395f6" }}> Sign up</span></div> :
                                        <div className="loginpage___signup">Have an account? <span  onClick={changeLogin} style={{"fontWeight":"bold", "color":"#0395f6" }} > Sign in </span> </div>
                                }
                            </div>
                            <div className="loginpage__downloadSection" >
                                <div >Get the app.</div>
                                <div className="loginpage__option">
                                    <img className="loginpage__dwimg" src={appstore} width="136px"/>
                                    <img className="loginpage__dwimg" src={playstore} width="136px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid  item xs={3} >
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage
