"use client"

import { useEffect, useState } from "react";
import AddNewTodo from "./addnewtodo";
import Progressbar from "./progressbar";
import TodoItem from "./todoitem";

var temp = {
    "title": "",
    "individual": [
        {
            "id": 0,
            "checked": false,
            "text": "fghfg"
        }
    ]
};
var idSimulator = temp.individual.length; //REMOVE ONCE DB HAS BEEN ADDED

export default function Todolist() {
    const [jsonObject, setJsonObject] = useState<any | null>(null);
    const [lista, setLista] = useState<any | null>(temp);

    const saveJSON = (data: any | null) => {
        data.id = idSimulator; //UPDATE ONCE DB HAS BEEN ADDED
        idSimulator++; //REMOVE ONCE DB HAS BEEN ADDED
        setJsonObject(data);
        lista.individual.push(data);
    };
    
    const changeCheked = (id: number) => {
        lista.individual[id].checked = !lista.individual[id].checked;
        
        console.log(lista);
    };


    let getAmountChecked = (): number => {
        return (Object.values(lista.individual).reduce((accumulator: number, checked: any ) => accumulator + checked ? 1 : 0, 0))
    };

    return (
        <section>
        <h2>{lista.title}</h2>
        {lista.individual.map((item: any) => (
          <TodoItem key={item.id} checked={item.checked} text={item.text} onClick={()=>changeCheked(item.id)}/>
        ))}  
        <AddNewTodo onSaveJSON={saveJSON} />
        <Progressbar    
            numberOfItems={lista.individual.length}
            currentCheckedItems={getAmountChecked()} 
        />
        </section>
    )
}

  