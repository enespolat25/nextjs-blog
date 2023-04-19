import React from "react";
import Link from "next/link";

import styles from "./styles.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        <span>BLOG</span>
      </Link>
	  <nav>
		<Link href="https://github.com/enespolat25/" target="_blank">Hakkında</Link> 
	  </nav>
    </header>
  );
}

export default Header;
