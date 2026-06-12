import { useState, useRef } from "react"
import Header from "../components/Header"
import Editor from "../components/Editor"
import List from "../components/List"
import React from "react"
import "./TodoPage.css"

let mockData = [
    {
        id: 0,
        isDone: false,
        content: "React공부",
        date: new Date().toLocaleDateString()
    },
    {
        id: 1,
        isDone: false,
        content: "빨래",
        date: new Date().toLocaleDateString()
    },
    {
        id: 2,
        isDone: false,
        content: "숙제",
        date: new Date().toLocaleDateString()
    }
]

function TodoPage() {

    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    function onCreate(content) {

        const newTodo = {
            id : idRef.current++,
            isDone: false,
            content: content,
            date: new Date().toLocaleDateString()
        };

        setTodos([newTodo, ...todos]);
    }

    return (
        <>
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} />
        </>
    )
}

export default TodoPage;