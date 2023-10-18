import Progressbar from "./progressbar";
import TodoItem from "./todoitem";

export default function Todolist() {
    return (
        <section>
        <h2>Title of project</h2>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <Progressbar />
        </section>
    )
  }