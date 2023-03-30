import { useState } from "react";

import Perfil from "./components/Perfil";
/* para importas só com a página, nomeamos o component com index.jsx */
import Formulario from "./components/Formulário";
import ReposList from "./components/Repos";

function App() {
  // const nome = 'Rafael';

  // function retornaNome() {
  //   return nome
  // };

  // const pessoa = {
  //   nome: 'Maria'
  // };

  // let estaDeDia = true;

  const [formulatioEstaVisivel, setFormulatioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* tag sempre fecha na mesma linha */}
      {/* <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtítulo</h2>
      {estaDeDia ? 'Bom dia' : 'Boa tarde'} Para expressões sempre verdadeiras usamos o && */}
      {/* {formulatioEstaVisivel && (
          <Formulario/>
        )}
        <button type="button" onClick={() => setFormulatioEstaVisivel(!formulatioEstaVisivel)}>Toggle Form</button> */}
      {/* lifecycle: mount/update/unmount */}

    </>
  );
}

export default App
