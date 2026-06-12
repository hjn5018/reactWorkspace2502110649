import TodoItem from "../components/TodoItem"
import "./List.css"

function List({todos}) {

    return (
        <>
        {todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </>
    )
};

export default List;