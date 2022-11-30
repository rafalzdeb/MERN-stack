import { useState } from "react"

const EventForm = () => {
    const [name, setName] = useState('');
    const [parent, setParent] = useState('');
    const [error, setError] = useState(null);


    const submit = async(e) => {
        e.preventDefault()

        const event = {name, parent}

        const response = await fetch('/api/events', {
            method: 'POST',
            body: JSON.stringify(event),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }

        if (response.ok) {
            setName('')
            setParent('')
            setError(null)
            console.log("new event added")
        }
    }

    return(
        <form className="create" onSubmit={submit}>
            <h3>Add a new event</h3>
            <label>Event name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value = {name}    
            />
            <button>Add Event</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default EventForm 