import { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { MountTransition } from "./MountTransition";

type Props = {
  exact?: boolean;
  path: string;
  children?: JSX.Element[];
  component: Function;
  slideX?: number;
  slideY?: number;
}

export const RouteTransition: FC<Props> = (
  {
    exact = false,
    path,
    slideX = 0,
    slideY = 0,
    component,
    ...rest
  }) => {
  return (
  <MountTransition slideX={slideX} slideY={slideY}>
    <Route exact={exact} path={path} {...rest}>
      {component({history: useHistory()})}
    </Route>
  </MountTransition>
)};

type RoutesProps = {
  exitBeforeEnter?: boolean
  initial?: boolean,
}

export const AnimatedRoutes: FC<RoutesProps> = (
  {
    children,
    exitBeforeEnter = true,
    initial = false
  }) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  );
};
