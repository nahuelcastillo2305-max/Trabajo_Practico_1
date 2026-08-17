import styles from "./Navbar.module.css";

function Navbar({ titulo, links }) {
  return (
    <nav className={styles.navbar}>
      <h1>{titulo}</h1>

      <ul className={styles.links}>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;