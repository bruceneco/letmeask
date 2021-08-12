import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "app.scss";
import { AdminRoom } from "./pages/AdminRoom";


export const ROUTES = {
  Home: () => "/",
  NewRoom: () => "/rooms/new",
  Room: (id: string | null = ":id") => `/rooms/${id}`,
  AdminRoom: (id: string | null = ":id") => `/admin/rooms/${id}`,
};

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              timeout={300}
              key={location.key}
              classNames="fade"
            >
              <Switch location={location}>
                <Route path={ROUTES.Home()} exact component={Home} />
                <Route path={ROUTES.NewRoom()} component={NewRoom} />
                <Route path={ROUTES.Room()} component={Room} />
                <Route path={ROUTES.AdminRoom()} component={AdminRoom} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>)} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
