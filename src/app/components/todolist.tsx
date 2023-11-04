"use client"

import { useEffect, useState } from "react";
import AddNewTodo from "./addnewtodo";
import Progressbar from "./progressbar";
import TodoItem from "./todoitem";

var temp = {
    "title": "test title",
    "individual": [
        {
            "id": 0,
            "checked": true,
            "text": "test 1"
        },{
            "id": 1,
            "checked": false,
            "text": "test 2"
        },{
            "id": 2,
            "checked": false,
            "text": "test 3"
        }
    ]
};
var idSimulator = temp.individual.length; //REMOVE ONCE DB HAS BEEN ADDED

export default function Todolist() {
    const [lista, setLista] = useState<any | null>(temp);
    const [jsonObject, setJsonObject] = useState<any | null>(null);

    /**
     * Calculates the percentage of completed tasks
     */
    const calculateProgress = (): number => {
        let checked = (Object.values(lista.individual).reduce((accumulator: number, individual: any ) => individual.checked ? accumulator + individual.checked: accumulator, 0));
        let total = lista.individual.length;
        return (100 * checked) / total;
    };

    const [progress, setProgress] = useState<any | null>(()=>calculateProgress());

    /**
     * Saves the new task to the list as JSON
     */
    const saveJSON = (data: any | null) => {
        data.id = idSimulator; //UPDATE ONCE DB HAS BEEN ADDED
        idSimulator++; //REMOVE ONCE DB HAS BEEN ADDED
        setJsonObject(data);
        setProgress(()=>calculateProgress());
        lista.individual.push(data);
    };
    
    /**
     * Saves the changed checked atribute on the list
     */
    const changeChecked = (id: number) => {
        lista.individual[id].checked = !lista.individual[id].checked;
        setLista(temp);
        setProgress(()=>calculateProgress());
    };

    return (
        <section>
        <h2>{lista.title}</h2>
        {lista.individual.map((item: any) => (
          <TodoItem key={item.id} 
                    checked={item.checked} 
                    text={item.text} 
                    onClick={()=>changeChecked(item.id)}/>
        ))}  
        <AddNewTodo onSaveJSON={saveJSON} />
        <Progressbar progress={progress} />
        </section>
    )
}

  