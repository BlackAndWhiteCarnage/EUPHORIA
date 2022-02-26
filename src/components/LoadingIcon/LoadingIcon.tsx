import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VectorSvg = styled.svg`
  position: fixed;
  width: 90%;
  max-height: 1000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface AnimateType {
  animate: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingIcon = () => {
  const [animate, setAnimate] = useState<AnimateType['animate']>(false);

  setTimeout((): void => {
    setAnimate(!animate);
  }, 500);

  return (
    <VectorSvg width='508' height='210' viewBox='0 0 508 210' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: animate ? 1 : 0, pathOffset: animate ? 0 : 1 }}
        d='M343.679 122.073C363.703 113.651 378.18 110.142 407.179 105.073C419.06 92.3942 443.679 114.073 450.679 101.573C457.679 89.0726 476.964 92.682 486.679 101.573C496.393 110.464 509.682 127.49 507.179 128.573M456.179 115.072C459.327 125.944 462.719 130.216 471.679 134.572'
        stroke='black'
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: animate ? 1 : 0, pathOffset: animate ? 0 : 1 }}
        d='M137.679 202.072C144.324 200.81 148.064 199.993 155.679 193.072C160.423 188.023 163.317 185.294 175.679 183.572C189.123 178.916 197.981 176.371 198.679 171.072C198.656 165.093 197.611 161.579 194.179 155.072C196.616 147.846 199.903 142.682 215.179 128.072C240.398 107.201 251.498 94.5057 259.679 68.0723M255.679 43.0723C262.417 68.8281 265.86 85.7802 270.679 126.072C270.858 127.572 281.776 182.105 297.679 196.572C313.581 211.04 333.783 212.471 361.679 202.072C372.5 196.572 387.397 155.977 406.5 163C433.112 169.2 446.966 175.52 469.5 193.072'
        stroke='black'
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: animate ? 1 : 0, pathOffset: animate ? 0 : 1 }}
        d='M227 123C243.693 142.519 254.569 152.287 276 168'
        stroke='black'
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: animate ? 1 : 0, pathOffset: animate ? 0 : 1 }}
        d='M341.679 134.072C324.205 84.47 312.558 58.8536 287.179 18.5722C288.162 10.0823 258.997 -16.3202 237.679 18.5722C227.38 30.8259 221.784 50.3278 213.81 59.0723M148.179 159.072C130.371 165.557 123.686 168.742 106.179 177.072C97.1839 179.129 92.1859 191.126 90.6787 194.572C89.1715 198.019 81.88 199.889 70.6787 197.072C63.5334 194.944 59.3764 190.28 51.6787 192.572C38.3975 193.866 32.6787 196.072 20.1787 194.572C11.4841 191.402 7.74109 192.076 3.17871 185.072C4.17871 185.572 4.97441 186.573 9.17925 188.072C-0.821382 185.072 0.178922 177.072 2.67925 177.072C5.17957 177.072 21.1288 179.22 30.6792 177.072L75.6793 158.072L120.179 134.072C157.179 107.572 191.679 63.5723 205.179 63.5723C208.456 63.5723 211.255 61.8747 213.81 59.0723M213.81 59.0723C186.625 111.82 148.679 164.072 134.679 188.572C130.679 192.572 124.599 191.369 121.679 194.572C118.746 198.688 118.42 200.552 121.679 202.572'
        stroke='black'
      />
    </VectorSvg>
  );
};

export default LoadingIcon;
