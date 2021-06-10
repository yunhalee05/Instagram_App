import React from 'react'
import './NavBar.css'
import Grid from '@material-ui/core/Grid'
import insta_logo from '../../images/logoinsta.png'
import home from '../../images/home.svg'
import message from '../../images/message.svg'
import find from '../../images/find.svg'
import react from '../../images/love.svg'
import Avatar from '@material-ui/core/Avatar';
import pp from '../../images/pp1.png'

function NavBar() {
    return (
        <div>
            <div className="navbar__barContent">
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <img className="navbar_logo" src={insta_logo} width="105px" alt="" />
                    </Grid>
                    <Grid item xs={3}>
                        <input className="navbar_searchBar" type="text" placeholder="Search" />
                    </Grid>
                    <Grid item xs={3} style={{"display":"flex"}}>
                        <img className = "navbar__img" src={home} alt="" width="25px" />
                        <img className = "navbar__img" src={message} alt="" width="25px"/>
                        <img className = "navbar__img" src={find} alt="" width="25px"/>
                        <img className = "navbar__img" src={react} alt="" width="25px"/>
                        <Avatar className = "navbar__img"  src={pp} style={{"maxWidth":"25px", "maxHeight":"25px"}}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default NavBar
