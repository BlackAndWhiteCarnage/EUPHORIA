export const pageAnimation = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  show: {
    opacity: 1,
    scale: 1,
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
    transition: { type: 'spring', stiffness: 100 },
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
    transition: { type: 'spring', stiffness: 100 },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const slideFromTop = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 400, when: 'beforeChildren', staggerChildren: 0.25 },
  },
};
