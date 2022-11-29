import {useEffect, useState} from 'react'

import EventDetails from '../components/EventDetails'
import EventForm from '../components/EventForm'

const Home = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events');
            const json = await response.json();
            
            if(response.ok){
                setEvents(json);
            }
        }

        fetchEvents()
    }, []);

    return (
        <div className="home">
           <div className="events">
            {events && events.map((event) => (
                <EventDetails key={event._id} event={event} />
            ))}
           </div>
           <EventForm />
        </div>
    )
}

export default Home;