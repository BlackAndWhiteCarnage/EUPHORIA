import { useRef, useEffect } from 'react';
import { StyledCursor } from './Cursor.styles';

interface PositionRefTypes {
    mouseX: number,
    mouseY: number,
    destinationX: number,
    destinationY: number,
    distanceX: number,
    distanceY: number,
    key: number,
}

const Cursor = () => {
  const mainCursor = useRef<HTMLDivElement>(null);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const positionRef = useRef<PositionRefTypes>({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const mouseMoveHandler = (e: MouseEvent): void => {
    const { clientX, clientY } = e;

    const mouseX = clientX;
    const mouseY = clientY;

    if(positionRef.current !== null && mainCursor.current !== null){
      positionRef.current.mouseX = mouseX - mainCursor.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - mainCursor.current.clientHeight / 2;

      mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${
        mouseY - mainCursor.current.clientHeight / 2
      }px, 0)`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    const followMouse = (): void => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.08;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.08;
      }

      if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.destinationX += distanceX;
        positionRef.current.destinationY += distanceY;
      }

      if(secondaryCursor.current !== null){
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };

    followMouse();
  }, []);

  return (
    <>
      <StyledCursor ref={mainCursor} className={`${!CSS.supports('backdrop-filter: invert(100%)') && 'notSupported'}`} />
      <StyledCursor ref={secondaryCursor} className={`${!CSS.supports('backdrop-filter: invert(100%)') && 'notSupported'} secondary`} />
    </>
  );
};

export default Cursor;
