import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <Container>
    <Nav className={styles.navContainer} >
    <h2 className={styles.navLogo}>
        <NavLink to ="/"> <img
            width="40"
            height="40"
            src="https://img.icons8.com/badges/48/saturn-planet.png"
            alt="saturn-planet"
          />Space Hub Travellers </NavLink></h2>
        <ul className={styles.menu}>
            <li className={styles.pageLink}>
                <NavLink to ="/">MyRocket</NavLink>
            </li>
            <li className={styles.pageLink}>
                <NavLink to ="/mymission/">MyMission</NavLink>
            </li>
            <li className={styles.pageLink}>
                <NavLink to ="/myprofile/">Myprofile</NavLink>
            </li>
        </ul>
    </Nav>
    </Container>
    );
}
export default Navbar;