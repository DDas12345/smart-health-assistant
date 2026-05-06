import { useState } from 'react'

function SleepTracker() {
    const [hours, setHours] = useState('')
    const [message, setMessage] = useState('')

    function checkSleep() {
        const sleepHours = Number(hours)


        if (hours.trim() === '') {
            setMessage('Please enter your sleep hours.')
        } else if (sleepHours <= 0) {
            setMessage('Please enter a valid number of hours.')
        } else if (sleepHours < 6) {
            setMessage('You slept less than recommended. Try to get more rest.')
        } else if (sleepHours >= 6 && sleepHours <= 9) {
            setMessage('Good job! Your sleep duration is healthy.')
        } else {
            setMessage('You slept more than usual. Maintain a balanced sleep routine.')
        }
    }

    return (
        <section className="section" id="sleep">
            <h2>Sleep Tracker</h2>
            <div className="tracker-box">
                <input
                    type="number"
                    placeholder="Enter sleep hours"
                    value={hours}
                    onChange={(e) => {
                        setHours(e.target.value)
                        setMessage('')
                    }}
                />
                <button onClick={checkSleep}>Check Sleep</button>
                {message && <p className="suggestion">{message}</p>}
            </div>
        </section>
    )
}

export default SleepTracker