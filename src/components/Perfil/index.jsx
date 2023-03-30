// Um component react é uma função que retorna um elemento html
import styles from './Perfil.module.css'
/* Para acessarmos os atributos dos elementos,
adicionamos à arrow function um argumento de 'props' */

const Perfil = ({ nomeUsuario }) => {
    // const { endereço, nome} = props; // descontruindo os objto com essas props
    return (
        // aqui fica o html
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" /> {/* Quando utilizamos js num atributo, removemos as aspas */}
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}
/* Css Modules: tratamos classes de elementos como se fossem propriedades de objetos */

export default Perfil
