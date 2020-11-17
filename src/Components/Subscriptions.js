import React, { useState } from 'react'
import SubsContentGrid from './SubsContentGrid'
import './Subscriptions.css'
import profilna from './profilna.jpg'
import thumbnail from './thumbnail.jpg'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';

function Subscriptions() {
    const [toggleView, setToggleView] = useState(true) 
    return (
        <div className="subs">
            <div className="subs__top">
                <div className="subs__top__left">
                    <label>Today</label>
                </div>
                <div className="subs__top__icons">
                    <label>SETTINGS</label>
                    <button onClick={() => setToggleView(true)}>
                        <ViewModuleIcon className={`subs__top__icon ${toggleView && "blue"}`}/>
                    </button>
                    <button onClick={() => setToggleView(false)}>
                        <ViewListIcon className={`subs__top__icon ${!toggleView && "blue"}`}/>
                    </button>
                </div>
            </div>
            <div className="subs__content">
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            <SubsContentGrid 
                title="Learn programming React in 2020"
                channel="Fran Turkovic"
                channelImage={profilna}
                image={thumbnail}
                views={152000}         
                timestamp="1 hour ago"   
            />
            </div>
        </div>
    )
}

export default Subscriptions
