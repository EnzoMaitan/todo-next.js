"use client"

import { useState } from "react";
import AddNewTodo from "./addnewtodo";
import Progressbar from "./progressbar";
import TodoItem from "./todoitem";

var temp = {
    "title": "",
    "individual": [
        {
            "checked": true,
            "text": "fghfg"
        }
    ]
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
        {lista.individual.map((item: any) => (
          <TodoItem key={item.text} checked={item.checked} text={item.text} onChange={false}/>
        ))}  
        <AddNewTodo onSaveJSON={saveJSON} />
        <Progressbar    
            numberOfItems={lista.individual.length}
            currentCheckedItems={Object.values(lista.individual).reduce((accumulator: number, checked: any ) => accumulator + checked ? 1 : 0, 0)} 
        />
        </section>
    )
}

  