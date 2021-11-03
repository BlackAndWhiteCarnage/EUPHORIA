export const fade = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.25 },
  },
  exit: {
    opacity: 0,
  },
};

export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.1, duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
