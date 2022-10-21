import Accordion from './Accordion';
import React from 'react';


const itens = [
    {
    titulo: "Java",
    conteudo: "Linguagem compilada e interpretada"
},
{
    titulo: "Pyhton",
    conteudo: "Linguagem interpretada e dinamicamente tipada"
},
{
    titulo: "JavaScript",
    conteudo: "Interpretada.Executada do lado do cliente e do lado do servidor tambem"
}
]

const App = ()=>{

    return(

        <div>
            <Accordion itens={itens}/>
        </div>
    )
}

export default App