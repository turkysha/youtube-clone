import React from 'react'
import SubsContentGrid from './SubsContentGrid'
import './Subscriptions.css'

function Subscriptions() {
    return (
        <div className="subs">
            <div className="subs__top">
                <h1>SubsPage</h1>
                <div className="subs__top__icons">

                </div>
            </div>
            <SubsContentGrid />
        </div>
    )
}

export default Subscriptions
