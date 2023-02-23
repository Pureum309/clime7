import styles from '@/styles/Background.module.css'

export default function Background({ children }) {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.stars} id='stars'></div>
                <div className={styles.stars2} id='stars2'></div>
                <div className={styles.stars3} id='stars3'></div>
                {children}
            </div>
        </>
    )
}