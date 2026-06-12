import TodoItem from "../components/TodoItem"
import "./List.css"

function List({todos}) {

    return (
        <>
        <h2>나는 리스트다!</h2>
        {todos.map((todo)=>{return <TodoItem key={todo.id} {...todo}/>})}
        {/* {todos.map((todo)=>{return <TodoItem todo={todo}/>})} */}
        </>
    )
};

export default List;