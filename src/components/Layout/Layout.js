/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
