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


function App() {
  return (
    <Provider store={Store}>
    <div className="app">
      <Router>
        <Header />
        <SearchList />
        <ol>
          {}
        </ol>
        <Switch>

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
