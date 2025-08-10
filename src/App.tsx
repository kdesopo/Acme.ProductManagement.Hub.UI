import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Dashboard } from './components/dashboard'
import { ApplicationHeader } from './components/application-header'
import { Box } from '@mui/material'

function App() {
  const queryClient = new QueryClient()
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ApplicationHeader />
        <Box id="app-content">
          <Dashboard />
        </Box>
      </QueryClientProvider>
    </>
  )
}

export default App
