import { useEffect, useState } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('')

    // O react tem uma função que chama uma função assim que um estado for alterado: useEffect (funções use = funções hook)(estamos fazendo um hook de um estado do react e o dom)
    //useEffect também funciona com atributos! quando algum atributo é atualizado, temos atualização do código pelo useEffect
    
    useEffect(() => {
        console.log('o estado nome mudou');
    }, [nome])

    useEffect(() => {
        console.log('materia a mudou para ' + materiaA);
    }, [materiaA, materiaB, materiaC])
    //use effect apenas quando o componente for montado

    useEffect(() => {
        console.log('o componente inciou');

        return () => {
            console.log('o componente finalizou');
        }
    }, []) //array vazio

    
    
    /* o useState recebe o valor inicial, mas esse argumento não é uma única variavel,
    o useState retorna o valor e uma função para alterar esse valor, colocamos então uma 
    desestruturação de objetos na declaração para podermos ter o retorno do valor e do método
    Ou seja, a useState() produz um array(???)*/
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi reprovado</p>
            )
        }
    }
    /* Imutabilidade: estamos pegando um valor e zerando ele com um valor novo. Não pegamos um estado e alteramos ele, mas pegamos toda uma string e atribuindo um valor novo a ela. Não é alteração de valor, mas substituição total de valor. Isso também acontece no view
    Para se aprofundar procurar sobre pure functions */
    const alteraNome = (e) => {
        // console.log(e.target.value);
        // setNome(e.target.value); // podemos utilizar o setNome() assim, ou acessar um valor antigo...
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);

            return e.target.value
        })
    }
    

    return (
        <form action="">
            {/* Renderizando listas */}
            <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li> /* Se o retorno fosse de mais de uma tag precisariamos de um wrapper */
            ))} {/* O map tem retorno! */}

            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            {/* também podemos desestruturar o evento com {} */}
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseFloat(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(parseFloat(target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={({target}) => setMateriaC(parseFloat(target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;