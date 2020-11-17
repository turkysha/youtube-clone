import React from 'react'
import './App.css'
import Header from './Components/Header'
import RecommendedVideos from './Components/RecommendedVideos'
import SideBar from './Components/Sidebar'
import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './Components/SearchPage'
import SearchList from './Components/SearchList'
import {Provider} from 'react-redux'
import Store from './Redux/Store'
import Trending from './Components/Trending'
import VideoPage from './Components/VideoPage'
import LoginModal from './Components/LoginModal'
import Login from './Components/Login'
import Subscriptions from './Components/Subscriptions'


function App() {
  return (
    <Provider store={Store}>
    <div className="app">
      <Router>
        <LoginModal />
        <Header />
        <SearchList />


        <Switch>

        <Route path="/subscriptions">
          <div className="app__page">
            <SideBar selected="Subscriptions"/> 
            <Subscriptions />
          </div>
        </Route>

        <Route path="/login">
          <div className="app__page">
            <Login />
          </div>
        </Route>

        <Route path="/videoPage">
            <div className="app__page">
              <SideBar selected=""/>
              <VideoPage />
            </div>
        </Route>

        <Route path="/trending">
            <div className="app__page">
              <SideBar selected="Trending"/>
              <Trending />
            </div>
          </Route>

          <Route path="/search/:searchTerm">
            <div className="app__page">
              <SideBar selected=""/>
              <SearchPage />
            </div>
          </Route>

          <Route path="/" >
            <div className="app__page">
              <SideBar selected="Home"/>
              <RecommendedVideos />
            </div>
          </Route>
          
        </Switch>
      </Router>
      

      
    </div>
    </Provider>
  );
}

export default App;
