import react, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice' 
import './App.css'
import { Header } from './components'
import { Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {

const [ loading, setLoading ] = useState(true)
const dispatch = useDispatch()

useEffect(() => {
  authService.getCurrentUser()
   .then( (userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
   })
   .finally(() => {
    setLoading(false)
   })
})
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-grey-400'>
      <div className='bg-grey-400'>
        <Header />
        <Outlet />
        <Footer />
      </div>
      </div>
  ) : null
}

export default App
