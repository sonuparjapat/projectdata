

import styles from "./Button.module.css"
export default function Button ({children,color,size,handleadd}){
    return (
        <button data-testid="custom-button" className={`${styles[color]} ${styles[size]}`} 
        onClick={handleadd}>{children}</button>
    )
}