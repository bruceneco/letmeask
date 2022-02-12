import { Switch, useLocation } from "react-router-dom";
import { useTransition } from "@react-spring/core";
import * as S from "./styles";
import { FC } from "react";

const AnimatedRouteSwitch: FC = ({ children }) => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, position: "relative", y: -50 },
    enter: {
      opacity: 1,
      y: 0
    },
    leave: {
      y: 100,
      opacity: 0,
      config: {duration: 100}
    },
  });

  return transitions((styles, location) => (
    <S.AnimatedPageTransition key={location.pathname} style={styles as any}>
      <Switch location={location}>
        {children}
      </Switch>
    </S.AnimatedPageTransition>
  ));
};

export default AnimatedRouteSwitch;