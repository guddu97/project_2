import styles from "./navigation.module.css"


export default function Navigation(){
    return(
        <nav className={`${styles.navigation}container`}>
            <div>
                <img src="/images/logo.png" alt="logo" />
            </div>
<ul>
    <li>Home</li>
    <li>Menu</li>
    <li>Contact</li>

</ul>

        </nav>
    )
}