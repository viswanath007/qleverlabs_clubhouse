import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';


import NavLink from './NavLink';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'inherit'
        }
    },
    brand: {
        fontWeight: 600,
    },
    logoIcon: {
        height: 50,
        width: 50,
    },
    appBar: {
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0 3px 3px -3px rgba(0,0,0,.1)',
        [theme.breakpoints.down('sm')]: {
            height: 60
        }
    },
    gridContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start'
        },
    },
    navLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    fabBtn: {
        textTransform: 'lowercase',
        fontSize: '110%',
    }
});

const leftSideNavLinks = [
    'Product',
    'Pricing',
    'Enterprise',
    'Customers',
    'Resources'
];

const rightSideNavLinks = [
    'Sign In',
    { text: 'Start free trial', component: 'button'}
];

const resoureces = [
'Help Center',
'Support and product documentation',
'API Reference',
'Documentation guide for developers',
'iOS App',
'Mobile access to your workspaces',
'Webinars & Training',
'Get the most out of the platform',
'Developer How-to',
'Tutorials from software engineers',
'The Clubhouse Blog',
'Fix errors faster with the new Sentry Integration',
'A developer\'s guide to hacking joy at your local hackerspace',
];


function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" className={classes.appBar}>
                <Toolbar className={classes.grow}>
                    <Grid container spacing={24} className={classes.gridContainer}>
                        <Grid item md={2}>
                            <IconButton className={classes.brand} color="primary" aria-label="Menu">
                                Clubhouse
                                <img src="/images/clubhouse_icon.png" alt="logo" className={classes.logoIcon} />
                            </IconButton>
                        </Grid>
                        <Grid item md={7}>
                            <Typography className={classes.navLinks}>
                                {leftSideNavLinks.map(item => (<NavLink key={item} text={item} />))}
                            </Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography className={classes.navLinks}>
                                {rightSideNavLinks.map(item =>
                                    typeof item === 'object' ?
                                        (<NavLink key={item.text}
                                            render={() => (<Fab className={classes.fabBtn} variant="extended" color="primary" aria-label="Start Trial">
                                                {item.text}
                                            </Fab>)} />) :
                                        (<NavLink key={item} text={item} />)
                                )}
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    
                    
                    {/* <Button color="inherit">Login</Button> */}
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);