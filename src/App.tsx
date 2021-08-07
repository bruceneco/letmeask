import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AnimatedRoutes, RouteTransition } from "./utils/animation/RouteTransition";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";

export const ROUTES = {
  Home: () => "/",
  NewRoom: () =>"/rooms/new",
  Room: (id: string | null =":id") => `/rooms/${id}`
};

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AnimatedRoutes>
          <RouteTransition path={ROUTES.Home()} exact component={Home} />
          <RouteTransition path={ROUTES.NewRoom()} component={NewRoom} />
          <RouteTransition path={ROUTES.Room()} component={Room} />
        </AnimatedRoutes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
