import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AnimatedRoutes, RouteTransition } from "./utils/animation/RouteTransition";
import { AuthContextProvider } from "./contexts/AuthContext";

export const ROUTES = {
  Home: "/",
  NewRoom: "/rooms/new"
};

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AnimatedRoutes>
          <RouteTransition path={ROUTES.Home} exact component={Home} />
          <RouteTransition path={ROUTES.NewRoom} component={NewRoom} />
        </AnimatedRoutes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
