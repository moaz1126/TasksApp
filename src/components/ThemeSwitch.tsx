import { useState } from 'react';
import moonIcon from '../assets/icon-moon.svg'
import sunIcon from '../assets/icon-sun.svg'
import styles from "../styles/themeSwitch.module.css";

export default function ThemeSwitch() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    function handleThemeSwitch():void {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
        document.documentElement.classList.toggle("dark");
    }

    return (
        <button
            className={styles.themeSwitch}
            onClick={handleThemeSwitch}
        >
            <img src={moonIcon} alt="Switch to dark mode" className={`${theme === "dark" && styles.showMoonIcon} ${styles.moonIcon}`} /> 
            <img src={sunIcon} alt="Switch to light mode" className={`${theme === "light" && styles.showSunIcon} ${styles.sunIcon}`} /> 
        </button>
    )
}