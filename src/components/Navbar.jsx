import React from 'react'

function Navbar() {
    return (
        <nav className='navbar'>
            <h1>Smart Health Assistant</h1>

            <div className='nav-links'>
                <a href="#features">Features</a>
                <a href="#symptoms">Symptoms</a>
                <a href="#habits">Habits</a>
                <a href="#water">Water</a>
                <a href="#sleep">Sleep</a>
                <a href="#medicine">Medicine</a>
                <a href="#tips">Tips</a>
            </div>
        </nav>
    )
}

export default Navbar