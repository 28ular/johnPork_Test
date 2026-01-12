import {create} from "zustand";

export const useTodo = create((set) => ({
    todo: [],

    createTodo: (setName) => set((state) => ({
        todo: [
            ...state.todo,
            {id: Date.now() , name: setName , completed: false},
        ],
    }))
}))