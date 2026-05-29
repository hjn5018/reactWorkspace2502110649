import { useState } from "react"
import Header from "../components/Header"
import Editor from "../components/Editor"
import List from "../components/List"
import React from "react"

function TodoPage() {

    let mockData = [
        {
            id: 0,
            isDone: false,
            content: "React공부하기",
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

    const [todos, setTodos] = useState(mockData);

    return (
        <>
        <Header/>
        <Editor/>
        <List todos={todos} />
        </>
    )
}

export default TodoPage;