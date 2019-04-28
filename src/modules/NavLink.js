import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';



const styles = theme => ({
    link: {
        margin: theme.spacing.unit,
        fontSize: 16,
        fontWeight: 500,
        cursor: 'pointer',
        color: 'inherit',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
});

// This resolves to nothing and doesn't affect browser history
// eslint-disable-next-line no-script-url
const dudUrl = 'javascript:;';

const NavLink = ({ classes, url, text, ...props }) => (
    <Link underline="none" href={url || dudUrl} className={classes.link}>
            {text ? text : props.render() }
    </Link>
);


NavLink.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavLink);
