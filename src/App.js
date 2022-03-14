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

        <Route index element={<Home posts={[]} />} />

        <Route path="/about" element={ <About /> } />
      
        <Route path="*" element={ <Missing /> } />

      </Routes>

      <Footer />

    </div>
  )
}

export default App
