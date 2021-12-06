export const fade = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.25, type: 'spring', stiffness: 200 },
  },
  exit: {
    opacity: 0,
  },
};

export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2, duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
