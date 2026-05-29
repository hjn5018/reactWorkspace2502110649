import TodoItem from "../components/TodoItem"

function List({todos}) {

    return (
        <>
        <h2>나는 리스트다!</h2>
        {todos.map((todo)=>{return <TodoItem {...todo}/>})}
        {/* {todos.map((todo)=>{return <TodoItem todo={todo}/>})} */}
        </>
    )
};

export default List;