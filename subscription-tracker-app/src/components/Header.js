import React from 'react'
import Totals from './Totals'

function Header() {
    return (
    <div className="header">
        <h1 className="subscriptionTracker">Subscription Tracker</h1>
        <Totals />
    </div>
    )
}

export default Header