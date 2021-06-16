export const pageAnimation = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    // y: -300,
  },
  show: {
    opacity: 1,
    scale: 1,
    // y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
};

export const slideFromLeft = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const slideFromRight = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
