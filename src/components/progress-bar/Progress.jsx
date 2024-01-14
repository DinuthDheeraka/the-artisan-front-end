import styles from './progressBar.module.css';
function Progress() {
    return <progress className={`${styles.progress}`} value={50} max={100}></progress>
}

export default Progress;