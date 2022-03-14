import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      
      <Header title="React JS Blog" />
      <Nav />

      <Routes>

        <Route path="/">
          <Home posts={[]} />
        </Route>
      
        <Route path="/about" component={ About } />
      
        <Route path="/post">
          <NewPost />
        </Route>
      
        <Route path="/post/:id">
          <PostPage posts={[]} />
        </Route>
      
        <Route path="*" component={ Missing } />

      </Routes>

      <Footer />

    </div>
  )
}

export default App
