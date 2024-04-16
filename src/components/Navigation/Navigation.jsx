import "../../App.css";
import styles from "./Navigation.module.css";
function Navigation() {

    return (
        <nav className={`${styles.navigation} container`}>
            <div className={`${styles.logo}`}>
                <img src="/images/logo.jpg" alt="do some coding logo" />
            </div>
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </nav>
    );
}

export default Navigation;