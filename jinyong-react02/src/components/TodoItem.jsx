import "./TodoItem.css"

function TodoItem({id, isDone, content, date}) {

    return (
        <>
        <div className="TodoItem">
            <input type="checkbox" checked={isDone}/>
            <div className="content">{content}</div>
            <div className="date">{date}</div>
            <button>삭제</button>
        </div>
        </>
    )
};

export default TodoItem;