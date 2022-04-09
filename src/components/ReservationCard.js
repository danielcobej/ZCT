import PhotoDisplay from './PhotoDisplay'
import Status from './Status'
import PriorityDisplay from './PriorityDisplay'
import Obsadenost from './Obsadenost'
import Delete from './Delete'
import {Link} from 'react-router-dom'

const ReservationCard =(color,reservation) =>{
    return (
        <div className="reservation-card">
        
        <Link to={`/ticket/${reservation.documentId}`} id="link">
        
        <div className="reservation-color"></div>
        <h3>{reservation.title}</h3>

        <PhotoDisplay reservation={reservation}/>
        <PhotoDisplay status={reservation.status}/>
        <Status/>
        <PriorityDisplay priority={reservation.priority}/>
        <Obsadenost/>
        
        </Link>

        <Delete/>
        </div>
    )
}

export default ReservationCard