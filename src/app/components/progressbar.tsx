"use client"

import { useEffect, useState } from "react";

export default function Progressbar({currentCheckedItems: currentCheckedItems, numberOfItems}: {currentCheckedItems : number, numberOfItems: number}) {    
    const [progress, calculateProgress] = useState(0);
    
    useEffect(() => {
        calculateProgress(() =>  (100 * currentCheckedItems) / numberOfItems );
    }, []);

    return (
        <section>
        <progress value={progress} max="100"> {progress} </progress>
        </section>
    )
}