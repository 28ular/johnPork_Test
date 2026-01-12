import {useTodo} from "../store/todolistStore.js";
import {useState} from "react";
import cls from './todo.module.css'
import { ToastContainer, toast } from 'react-toastify';


export const Todolist = () => {

    const [ crete , setCrete ] = useState( '' );
    const { createTodo , todo } = useTodo()
    const [search , setSearch] = useState('')



    const HandleClick = () => {
        if (!crete) {
            const not = toast.error('заполните поле!    ')
            return
        };
        createTodo(crete)
        const noty = toast.success('success! todo create')
    }

    const filtered = todo.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <ToastContainer/>
            <h1>TodoList</h1>

            <input
                type="text"
                value={crete}
                onChange={(e) => setCrete(e.target.value)}
                placeholder=' write any.....'
            />
            <input
                type="text"
                value={search}
                placeholder="search..."
                onChange={(e) => setSearch(e.target.value)}
            />


            <button onClick={HandleClick}>create</button>

            { filtered.length === 0 && <p>пока пусто создайте задач 😭</p>}


            <ul>
                {filtered.map((t , index) => (
                    <div key={t?.id} className={cls.card}>
                        <span>задача: {index + 1 }</span>
                        <h3 className="tittle">
                           title: {t.name}
                        </h3>
                        <span>completed:     {t.completed ? 'выполнино😍' : 'не выполнино😡'}</span>
                    </div>
                ))}
            </ul>
        </>
    )
}