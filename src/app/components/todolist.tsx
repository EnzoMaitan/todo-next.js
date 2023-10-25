"use client"

import { useState } from "react";
import AddNewTodo from "./addnewtodo";
import Progressbar from "./progressbar";
import TodoItem from "./todoitem";

var temp = {
    "title": "",
    "individual": []     
};

export default function Todolist() {
    const [jsonObject, setJsonObject] = useState<any | null>(null);
    const [lista, setLista] = useState<any | null>(temp);

    const saveJSON = (data: any | null) => {
        setJsonObject(data);
        lista.individual.push(data);
        console.log(lista);
    };
    
    return (
        <section>
        <h2>{lista.title}</h2>
        {lista.individual.map((item) => (
          <TodoItem checked={item.checked} text={item.text} onChange={false}/>
        ))}  
        <AddNewTodo onSaveJSON={saveJSON} />
        <Progressbar    
            numberOfItems={lista.individual.length}
            currentItems={Object.values(lista.individual).reduce((a, { checked }) => a + +checked, 0)} 
        />
        </section>
    )
}

  