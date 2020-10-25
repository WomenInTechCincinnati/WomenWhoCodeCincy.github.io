import { Link } from "gatsby"
import { Button, Menu, MenuItem, makeStyles } from "@material-ui/core"
import { GiHamburgerMenu } from "react-icons/gi"
import React from "react"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: "#007a7c",
    marginBottom: "1.45rem",
  },
  headerInnerDiv: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
    display: `flex`,
    justifyContent: `space-between`,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  siteTitle: {
    minWidth: "350px",
  },
  subTitle: {
    fontWeight: `bolder`,
    letterSpacing: "0.5rem",
    display: `block`,
    textTransform: `uppercase`,
  },
  isDesktopLayout: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  isMobileLayout: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linkOuterWrapper: {
    alignSelf: "flex-end",
  },
  linkInnerWrapper: {
    display: "flex",
    flex: 1,
  },
  listItem: {
    listStyleType: "none",
    padding: "1rem",
  },
  hamburgerMenu: {
    fontSize: "18px",
    color: "white",
  },
  button: {
    paddingBottom: "1rem",
  },
}))

export default function Header({ siteTitle, subTitle, menuLinks }) {
  const classes = useStyles()
  const [anchorElement, setAnchorElement] = React.useState(null)
  const handleClick = event => {
    setAnchorElement(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorElement(null)
  }

  Header.propTypes = {
    siteTitle: PropTypes.string,
    menuLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }

  Header.defaultProps = {
    siteTitle: ``,
  }

  return (
    <header className={classes.header}>
      <div className={classes.headerInnerDiv}>
        <Link to="/" className={classes.link}>
          <h1 className={classes.siteTitle}>
            {" "}
            {siteTitle}
            <span className={classes.subTitle}>{subTitle}</span>
          </h1>
        </Link>
        <div className={classes.linkOuterWrapper}>
          <nav>
            <div className={classes.isMobileLayout}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.button}
              >
                <GiHamburgerMenu className={classes.hamburgerMenu} />
              </Button>
              <Menu
                id="hamburger-menu"
                anchorEl={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={handleClose}
              >
                {menuLinks.map(link => (
                  <MenuItem
                    onClick={handleClose}
                    key={link.name}
                    className={classes.listItem}
                  >
                    {link.name}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <div className={classes.isDesktopLayout}>
              <ul className={classes.linkInnerWrapper}>
                {menuLinks.map(link => (
                  <li key={link.name} className={classes.listItem}>
                    <Link className={classes.link} to={link.link}>
                      {" "}
                      {link.name}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
