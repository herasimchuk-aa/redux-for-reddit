import React                from 'react'
import { render }           from 'react-dom'
import { Router,
         Route,
         IndexRedirect,
         browserHistory }   from 'react-router'

import App               from './containers/App'
import Search            from './containers/SearchContainer'
import Subreddits        from './containers/SubredditsContainer'
import Navigation        from './containers/NavigationContainer'

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/hot" /> 
            <Route path="/search" component={Search} name="search" />
            <Route path="/subreddits" component={Subreddits} />                 
            <Route path="/r/:subreddit(/:sort)" component={Navigation} name="subreddit" />
            <Route path="/:sort" component={Navigation} name="front" />         
        </Route>    
    </Router>
)

export default routes    