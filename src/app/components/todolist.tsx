import Progressbar from "./progressbar";
import TodoItem from "./todoitem";

export default function Todolist() {
    const lista = {
        "title": "TODO TODO",
        "individual": [
            {checked:true, text:"todo 0"},
            {checked:false, text:"todo 1"},
            {checked:true, text:"todo 2"}
        ]
    };

    return (
        <section>
        <h2>{lista.title}</h2>
        {lista.individual.map((item) => (
          <TodoItem checked={item.checked} text={item.text} onChange={false}/>
        ))}  
        <Progressbar    
            numberOfItems={lista.individual.length}
            currentItems={Object.values(lista.individual).reduce((a, { checked }) => a + +checked, 0)}
        />
        </section>
    )
}

  