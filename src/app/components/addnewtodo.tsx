"use client"

import { useState } from "react";

export default function AddNewTodo({ onSaveJSON } : any){
  
    type JsonObject = {
        checked: boolean,
        text: string;
    };
    
    type TextAreaToJSONProps = {
        onSaveJSON: (data: JsonObject | null) => void;
    };

    const [inputValue, setInputValue] = useState<string>("");
    const [jsonObject, setJsonObject] = useState<JsonObject | null>(null);
    
    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
            if (inputValue.trim()) {
                const newJsonObject: JsonObject = {
                    checked: false,
                    text: inputValue.trim(),
                };
                setJsonObject(newJsonObject);
                onSaveJSON(newJsonObject);
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