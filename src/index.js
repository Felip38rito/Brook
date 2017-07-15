// this is the most important file
// all the application is controlled by this entry point
// and generates the app with help of webpack

// load the base styles (yes, we can)
import normalize from 'normalize.css'
import main from './styles/main.sass'

// load react stuff
import React from 'react'
import ReactDOM from 'react-dom'

// load the App component
import App from './components/App.jsx'

// inject our react app into html
ReactDOM.render(<App />, document.getElementById('react-root'))