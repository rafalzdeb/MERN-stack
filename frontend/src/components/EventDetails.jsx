const EventDetails = ({event}) => {
    return (
        <div className="event-details">
            <h4>{event.name}</h4>
            <p><strong>Created@: </strong>{event.createdAt}</p>
            <p><strong>Modified@: </strong>{event.updatedAt}</p>
        </div>
    )
} 

export default EventDetails 