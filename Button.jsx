function Button(props){
    //outside return(JSX) -->JS
    console.log(props)
    let btnColorClass = `btn btn-${props.color}`
    return(
        <div>
            {/* here we can write JS*/ }
         <button className={btnColorClass}> {props.text} </button>
        </div>
         
    )
}
    Button.defaultProps={
        text: 'Default Text',
        color: 'primary'
    }

    

export default Button;