import type React from "react";
import styles from './styles.module.scss'
import logoImg from '../../assets/logo.png'



export const Main: React.FC = () => {
    return(
        <>
            <main className={styles.main}>
        
                <header className={styles.header}>
                    <img src={logoImg} alt="Logo" />
                    <h1>Lista de Compras </h1>
                    <p>Facilite sua ida ao supemercado!</p>
                </header>

            <form >
                <div className={styles.inputLabel}>

                    <label htmlFor="itemNome">Item</label>
                    <input type="text" id="itemNome" />

                </div>

                <div className={styles.inputLabel}>
                    <label htmlFor="itemQuantidade">Quantidade</label>
                    <input type="number" id="itemQuantidade" />
                </div>  

                <button type="submit"> + </button>
            </form>

        
        </main>
            
        

        
        
        </>
)
}