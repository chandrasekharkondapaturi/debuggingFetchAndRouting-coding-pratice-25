import {Route, Switch} from 'react-router-dom'

// bug-1 => import Switch from 'react-router-dom'
// bug-2 => We should place NotFound component at last in switch container
// bug-3 => We should place Header outside the Switch
// bug-4 => about spelling written as abou in Route component
// bug-5 => wrong path is written while calling Contact component
// bug-6 => wrong path is written while calling Home component
// bug-7 => wrong path is written i.e "/blogs/id" we should change as "/blogs/:id"
// bug-18 => flex-direction in (app.css) => app.body => flex-direction is row we should change to column

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/blogs/:id" component={BlogItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
