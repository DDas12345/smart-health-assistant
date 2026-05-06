import { useState, useEffect } from 'react'

function WaterTracker() {
    const [glasses, setGlasses] = useState(() => {
        const savedGlasses = localStorage.getItem('waterGlasses')
        return savedGlasses ? JSON.parse(savedGlasses) : 0
    })

    const goal = 8

    useEffect(() => {
        localStorage.setItem('waterGlasses', JSON.stringify(glasses))
    }, [glasses])

    function addGlass() {
        setGlasses(glasses + 1)
    }

    function removeGlass() {
        if (glasses > 0) {
            setGlasses(glasses - 1)
        }
    }

    function resetGlasses() {
        setGlasses(0)
    }

    return (
        <section className="section" id="water">
            <h2>Water Tracker</h2>

            <div className="tracker-box">
                <h3>{glasses} / {goal} glasses</h3>

                <p>
                    {glasses >= goal
                        ? "Great job! You've reached your hydration goal!"
                        : 'Keep going, stay hydrated!'}
                </p>

                <div className="button-row">
                    <button onClick={addGlass}>Add Glass</button>
                    <button onClick={removeGlass}>Remove Glass</button>
                    <button onClick={resetGlasses}>Reset</button>
                </div>
            </div>
        </section>
    )
}

export default WaterTracker