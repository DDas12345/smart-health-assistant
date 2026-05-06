import { useState } from 'react'

function MedicineReminder() {
    const [medicine, setMedicine] = useState('')
    const [time, setTime] = useState('')
    const [reminders, setReminders] = useState([])

    function addReminder() {
        if (medicine.trim() === '' || time === '') {
            alert('Please enter medicine name and time')
            return
        }

        const newReminder = {
            id: Date.now(),
            medicine: medicine,
            time: time
        }

        setReminders([...reminders, newReminder])
        setMedicine('')
        setTime('')
    }

    function deleteReminder(id) {
        const filteredReminders = reminders.filter((item) => item.id !== id)
        setReminders(filteredReminders)
    }

    return (
        <section className="section" id="medicine">
            <h2>Medicine Reminder</h2>

            <div className="tracker-box">
                <input
                    type="text"
                    placeholder="Enter medicine name"
                    value={medicine}
                    onChange={(e) => setMedicine(e.target.value)}
                />

                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />

                <button onClick={addReminder}>Add Reminder</button>

                <div className="habit-list">
                    {reminders.map((item) => (
                        <div className="habit-item" key={item.id}>
                            <span>{item.medicine} - {item.time}</span>

                            <button onClick={() => deleteReminder(item.id)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MedicineReminder