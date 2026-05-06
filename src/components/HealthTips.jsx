function HealthTips() {
    const tips = [
        'Drink enough water every day.',
        'Sleep 6 to 9 hours daily.',
        'Exercise or walk regularly.',
        'Eat fruits and vegetables.',
        'Avoid too much junk food.',
        'Take short breaks from screen time.'
    ]

    return (
        <section className="section" id="tips">
            <h2>Health Tips</h2>

            <div className="features-grid">
                {tips.map((tip, index) => (
                    <div className="feature-card" key={index}>
                        <h3>Tip {index + 1}</h3>
                        <p>{tip}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HealthTips