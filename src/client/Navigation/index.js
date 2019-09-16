import React from 'react';
/* MUI STYLES */
import { withStyles, fade } from '@material-ui/core/styles';
/* MUI COMPONENTS */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
/* ICONS */
import MenuIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = (theme => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    search: {
        flexGrow: 1,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: '100%',
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     width: 200,
        // },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
        },
    }
}));

class Nav extends React.Component{
    render() {
        const classes = this.props.classes;
        return (
        <AppBar position="static" >
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.sectionDesktop}>
                    cosee-p
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />
                <div >
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                        >
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        )
    }
}

export default withStyles(useStyles)(Nav);