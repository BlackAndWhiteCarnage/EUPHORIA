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
    y: -80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, delay: 0.65, when: 'beforeChildren', staggerChildren: 0.25 },
  },
  exit: {
    opacity: 0,
    y: 80,
    transition: {
      delay: 0.25,
      duration: 0.5,
    },
  },
};
