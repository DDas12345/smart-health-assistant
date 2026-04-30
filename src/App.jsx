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

            <h2>Features</h2>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />

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