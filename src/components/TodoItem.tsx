import React from 'react';

interface TodoItemProps {
 id: number;
 title: string;
 completed: boolean;
}
/*const TodoItem: TodoItemProps = { id: 0, title: "title", completed:true,
    return (
        <div>
        <h3>{title}</h3>
        <p>{completed ? 'Completed' : 'Not Completed'}</p>
        </div>
        );
       
   };*/
   const TodoItem: React.FC<TodoItemProps> = ({ title, completed }) =>{ 
    return (
    <div>
    <h3>{title}</h3>
    <p>{completed ? 'Completed' : 'Not Completed'}</p>
    </div>
    );
   };
   
export default TodoItem;