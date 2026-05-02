import { useState } from 'react'

function SymptomChecker() {
    const [symptom, setSymptom] = useState('')
    const [suggestion, setSuggestion] = useState('')

    function checkSymptom() {
        const userSymptom = symptom.toLowerCase()

        if (userSymptom.includes('fever')) {
            setSuggestion('You may have fever. Drink water, take rest, and consult a doctor if it continues.')
        } else if (userSymptom.includes('cough')) {
            setSuggestion('You may have cough. Drink warm water and avoid cold food.')
        } else if (userSymptom.includes('headache')) {
            setSuggestion('You may have headache. Take rest, reduce screen time, and stay hydrated.')
        } else if (userSymptom.includes('cold')) {
            setSuggestion('You may have cold. Take steam, drink warm fluids, and rest properly.')
        } else if (userSymptom.trim() === '') {
            setSuggestion('Please enter a symptom first.')
        } else if (
            userSymptom.includes('stomach pain') ||
            userSymptom.includes('stomach ache') ||
            userSymptom.includes('belly pain')
        ) {
            setSuggestion(
                'You may have stomach discomfort. Eat light food, stay hydrated, and avoid oily or spicy food.'
            )
        } else {
            setSuggestion('Please monitor your symptoms and consult a doctor if the problem continues.')
        }
    }

    return (
        <section className="section" id="symptoms">
            <h2>Symptom Checker</h2>

            <div className="checker-box">
                <input
                    type="text"
                    placeholder="Enter symptom like fever, cough, headache..."
                    value={symptom}
                    onChange={(e) => setSymptom(e.target.value)}
                />

                <button onClick={checkSymptom}>Check</button>

                {suggestion && <p className="suggestion">{suggestion}</p>}
            </div>
        </section>
    )
}


export default SymptomChecker