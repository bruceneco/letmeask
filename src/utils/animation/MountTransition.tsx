import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  slideX?: number
  slideY?: number
}


export const MountTransition: FC<Props> = (
  {
    children,
    slideX = 0,
    slideY = 30
  }) => (
  <motion.div
    exit={{ opacity: 0, x: slideX, y: slideY }}
    initial={{ opacity: 0, x: slideX, y: slideY }}
    animate={{ opacity: 1, x: 0, y: 0 }}
  >
    {children}
  </motion.div>
);
