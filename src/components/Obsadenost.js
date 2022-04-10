const Obsadenost =({progress}) =>{
    return (
        <div className="progress-display">
            <div className="progress-bar">
                <div style={{width: progress + '%'}} className='progress-indicator'>    
                {/* upravit na switch aby sa menila farba na zaklade obsadenosti !!! */}
                </div>
            </div>

        </div>
    )
}

export default Obsadenost