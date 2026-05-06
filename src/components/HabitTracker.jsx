import { useState, useEffect } from 'react'

function HabitTracker() {
    const [habit, setHabit] = useState('')
    const [habits, setHabits] = useState(() => {
        const savedHabits = localStorage.getItem('habits')

        return savedHabits ? JSON.parse(savedHabits) : []
    })

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits))
    }, [habits])

    function addHabit() {
        if (habit.trim() === '') {
            alert('Please enter a habit')
            return
        }
        const newHabit = {
            id: Date.now(),
            name: habit,
            completed: false
        }
        setHabits([...habits, newHabit])
        setHabit('')
    }

    function toggleHabit(id) {
        const updatedHabits = habits.map(h => {
            if (h.id === id) {
                return { ...h, completed: !h.completed }
            }
            return h
        })
        setHabits(updatedHabits)
    }
    function deleteHabit(id) {
        const filteredHabits = habits.filter((item) => item.id !== id)
        setHabits(filteredHabits)
    }
    return (
        <section className='section' id='habits'>
            <h2>Habit Tracker</h2>
            <div className='tracker-box'>
                <div className='input-row'>
                    <input
                        type='text'
                        placeholder='Enter habit like walking, exercise...'
                        value={habit}
                        onChange={(e) => setHabit(e.target.value)}
                    />
                    <button onClick={addHabit}>Add Habit</button>
                </div>
                <div className='habit-list'>
                    {habits.map((item) => (
                        <div className="habit-item" key={item.id}>
                            <span className={item.completed ? 'completed' : ''}>
                                {item.name}
                            </span>
                            <div>
                                <button onClick={() => toggleHabit(item.id)}>
                                    {item.completed ? 'Undo' : 'Done'}
                                </button>

                                <button onClick={() => deleteHabit(item.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HabitTracker