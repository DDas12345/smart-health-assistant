import React from 'react'
import Navbar from './components/Navbar'
import FeatureCard from './components/FeatureCard'
import SymptomChecker from './components/SymptomChecker'
import HabitTracker from './components/HabitTracker'
import WaterTracker from './components/WaterTracker'
import SleepTracker from './components/SleepTracker'
import MedicineReminder from './components/MedicineReminder'
import HealthTips from './components/HealthTips'
import Hero from './components/Hero'
import './App.css'

function App() {
    return (
        <div>
            <Navbar />

            <Hero />

            <section className='section'>
                <h2>Our Features</h2>
                <div className='features-grid'>
                    <FeatureCard title="Symptom Checker" description="Enter your symptoms and get basic health suggestions." />
                    <FeatureCard title="Habit Tracker" description="Track your daily habits and build positive routines." />
                    <FeatureCard title="Water Tracker" description="Stay hydrated by tracking your daily water intake." />
                    <FeatureCard title="Sleep Tracker" description="Monitor your sleep patterns and improve your rest." />
                    <FeatureCard title="Medicine Reminder" description="Never miss a dose with our smart medicine reminders." />
                </div>
            </section>

            <SymptomChecker />

            <HabitTracker />

            <WaterTracker />

            <SleepTracker />

            <MedicineReminder />

            <HealthTips />
        </div>
    )
}

export default App