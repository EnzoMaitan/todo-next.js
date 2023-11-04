"use client"

export default function Progressbar({progress}: {progress : number}) {    
    return (
        <section>
        <progress value={progress} max="100"> {progress} </progress>
        </section>
    )
}