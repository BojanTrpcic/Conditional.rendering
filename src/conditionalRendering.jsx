const ConditionalRendering = (props) => {
    const veciBroj = <p>nije tako dobar kako sam mislio</p>
    const manjiBroj = <p>je vec nesto bolji</p> 
    
    const provjera = props.number > 5 ? veciBroj : manjiBroj

    return (
        <>
            <h1>
                Resident evil {props.number}
            </h1>
            {props.number && provjera}
        </>
    )
}


export default ConditionalRendering

 


