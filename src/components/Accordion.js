
import React from 'react';
import {Card} from 'primereact/card';

const Accordion = ({itens})=>{

    const expressaoJSX = itens.map((item, indice)=>(
        <Card key={indice} className="border-1 border-400">
            <div className='row'>
                <i className='pi pi-angle-down'></i>
                <h5 className='inline ml-3'>{item.conteudo}</h5>
            </div>
            <p>{item.conteudo}</p>
        </Card>
    ))
    return(

        <div>
            {
                expressaoJSX
            }
        </div>
    )
}

export default Accordion