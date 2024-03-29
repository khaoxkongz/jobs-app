import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { addJob, deleteJob, jobLoader, updateJob } from './hook'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

import JobsPage from './pages/JobsPage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

import NotFound from './components/NotFound'
import EditJobPage from './pages/EditJobPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
