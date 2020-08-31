import { spring } from 'react-router-transition';

const glide = (val: number) => {
  return spring(val, {
    stiffness: 164,
    damping: 20,
  });
};

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

export { glide, pageTransitions };
