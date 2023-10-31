"use client"

import { useState } from "react";

export default function AddNewTodo({ onSaveJSON } : any){
  
    type TodoItemJSON = {
        checked: boolean,
        text: string;
    };
    
    type TextAreaToJSONProps = {
        onSaveJSON: (data: TodoItemJSON | null) => void;
    };

    const [inputValue, setInputValue] = useState<string>("");
    const [todoItemJSON, setJsonObject] = useState<TodoItemJSON | null>(null);
    
    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
            if (inputValue.trim()) {
                const newTodoItemJSON: TodoItemJSON = {
                    checked: false,
                    text: inputValue.trim(),
                };
                setJsonObject(newTodoItemJSON);
                onSaveJSON(newTodoItemJSON);
                setInputValue("");
            }
        }
    }
        return (
            <div>
                <textarea 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyUp={handleKeyPress}
                    placeholder="Add a new task"/>
            </div>
        );
    
}