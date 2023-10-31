"use client"

export default function Progressbar({currentCheckedItems: currentCheckedItems, numberOfItems}: {currentCheckedItems : number, numberOfItems: number}) {    
    const calculateProgress = () =>{
        console.log("current:" + currentCheckedItems);
        console.log("number:" + numberOfItems);
         return (100 * currentCheckedItems) / numberOfItems;
    };
    
    return (
        <section>
        <progress value={calculateProgress()} max="100"> {calculateProgress()} </progress>
        </section>
    )
}