const PriorityDisplay =({priority}) =>{
    return (
        <div className="priority-display"> 
        <div className="star-container">
            <h3 style={{color: priority>=1 ? 'rgb(253,253,150)': ''}}>☆</h3>
        </div>  
        {/* unicode stars 1:00:20 video */}
        
        </div>
    )
}

export default PriorityDisplay