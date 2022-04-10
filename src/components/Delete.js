const Delete =() =>{
    
    const deleteReservation = () =>{
        console.log('deleted')
    }
    
    return (
        <div className="delete-block">
            <div className="delete-icon" onClick={deleteReservation}>✖</div>

        </div>
    )
}

export default Delete