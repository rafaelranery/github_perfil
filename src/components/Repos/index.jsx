import { useEffect, useState } from "react";
import styles from './Repos.module.css'

const ReposList = ({ nomeUsuario }) => {

    const [repos, setRepos] = useState([]);

    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                    console.log(resJson.length);
                }, 1000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.list__item} key={id}>
                            <div className={styles.list__itemName}>
                                <b>
                                    {name}
                                </b>
                            </div>
                            <div className={styles.list__itemLanguage}>
                                <b>Language:</b>{language}
                            </div>
                            <a className={styles.list__itemLink} href={html_url}>Github</a>
                        </li>
                    ))}
                </ul>

            )}
        </div>
    )
}

export default ReposList;