"use client"


export default function Progressbar({currentItems, numberOfItems}: {currentItems : number, numberOfItems: number}) {    
    const calculateProgress = () =>{
         return (100 * currentItems) / numberOfItems;
    };
    
    return (
        <section>
        <progress value={calculateProgress()} max="100"> {calculateProgress()} </progress>
        </section>
    )
}