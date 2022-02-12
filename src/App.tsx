import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/theme'
import GlobalStyles from './styles/global'
import AnimatedRouteSwitch from './components/animation/AnimatedRouteSwitch'

export const ROUTES = {
  Home: () => '/',
  NewRoom: () => '/rooms/new',
  Room: (id: string | null = ':id') => `/rooms/${id}`,
  AdminRoom: (id: string | null = ':id') => `/admin/rooms/${id}`
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthContextProvider>
        <AnimatedRouteSwitch>
          <Route path={ROUTES.Home()} exact component={Home} />
          <Route path={ROUTES.NewRoom()} component={NewRoom} />
          <Route path={ROUTES.Room()} component={Room} />
          <Route path={ROUTES.AdminRoom()} component={AdminRoom} />
        </AnimatedRouteSwitch>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
