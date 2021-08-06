import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AnimatedRoutes, RouteTransition } from "./utils/animation/RouteTransition";

export const ROUTES = {
  Home: "/",
  NewRoom: "/rooms/new"
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes>
        <RouteTransition path={ROUTES.Home} exact component={Home} />
        <RouteTransition path={ROUTES.NewRoom} component={NewRoom}/>
      </AnimatedRoutes>
    </BrowserRouter>
  );
}

export default App;
