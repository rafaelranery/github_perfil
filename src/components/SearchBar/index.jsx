import { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = ({ childToParent }) => {

    return (
        <div className={styles.searchBar}>
            <input id="search-bar" placeholder="usuarioGitExemplo" className={styles.searchBarInput} type="text" onBlur={(e) => { childToParent(e.target.value) }} />
            <button className={styles.searchBtn} type="button">Buscar</button>
        </div>
    )

}

export default SearchBar;