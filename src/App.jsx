import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layouts/app-layout'
import LandingPage from './Pages/landing'
import OnBoarding from './Pages/onboarding'
import JobPage from './Pages/job'
import JobListing from './Pages/job-listing'
import PostJob from './Pages/post-job'
import SavedJobs from './Pages/save-job'
import MyJobs from './Pages/my-jobs'
import { ThemeProvider } from './components/ui/theme-provider'



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/onboarding',
        element: <OnBoarding />,
      },
      {
        path: '/jobs',
        element: <JobListing />,
      },
      {
        path: '/job/:id',
        element: <JobPage />,
      },
      {
        path: '/post-job',
        element: <PostJob />,
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />,
      },
      {
        path: '/my-jobs',
        element: <MyJobs />,
      },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>



  )
}

export default App
