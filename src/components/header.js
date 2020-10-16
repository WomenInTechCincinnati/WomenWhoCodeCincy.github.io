import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, subTitle, menuLinks }) => (
  <header
    className="primaryColorTeal" style={{
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`
      }}
    >

       <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
      <h1 style={{minWidth: `350px`}}>
       
          {siteTitle}
        <span style={{fontWeight:`bolder`, letterSpacing: '0.5rem', display:`block`, textTransform: `uppercase`}}>{subTitle}</span>
      </h1>
      </Link>
      <div style={{ alignSelf: `flex-end`}}>
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`
                }}
              >
                <Link style={{ color: `white`, textDecoration: `none` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  )
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
