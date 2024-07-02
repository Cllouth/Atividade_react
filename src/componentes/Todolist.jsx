import React from "react";

const TodolistComponente = ({tarefas}) => {
    return(
        <ul>
            {tarefas.map((tarefa) => (
                <li>{tarefa.Text}</li>
            ))}
        </ul>
    )
}

export default TodolistComponente;