import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import SimpleBottomNavigation from './components/MainNav'
import Container from '@material-ui/core/Container'
import Trending from './pages/trending/Trending'
import Movies from './pages/movies/Movies'
import Series from './pages/series/Series'
import Search from './pages/search/Search'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" exact component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  )
}

export default App
