import React from "react";

import * as styles from "./separatorline.module.css";

const SeparatorLine = () => {
  return (
    <section className={styles.wrapper}>
      <svg
        width="82"
        height="65"
        viewBox="0 0 82 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path
          d="M43.2857 32.8571C43.2857 41.3545 40.8575 49.0049 36.9827 54.5045C33.106 60.007 27.8445 63.2857 22.1429 63.2857C16.4412 63.2857 11.1797 60.007 7.30298 54.5045C3.4282 49.0049 1 41.3545 1 32.8571C1 24.3598 3.4282 16.7094 7.30298 11.2097C11.1797 5.70733 16.4412 2.42857 22.1429 2.42857C27.8445 2.42857 33.106 5.70733 36.9827 11.2097C40.8575 16.7094 43.2857 24.3598 43.2857 32.8571Z"
          fill="white"
          stroke="black"
          stroke-width="2"
        />
        <path
          d="M81.0001 31.4286C81.0001 39.9259 78.5719 47.5763 74.6971 53.076C70.8204 58.5784 65.5588 61.8571 59.8572 61.8571C54.1556 61.8571 48.894 58.5784 45.0173 53.076C41.1426 47.5763 38.7144 39.9259 38.7144 31.4286C38.7144 22.9312 41.1426 15.2808 45.0173 9.78117C48.894 4.27875 54.1556 1 59.8572 1C65.5588 1 70.8204 4.27875 74.6971 9.78117C78.5719 15.2808 81.0001 22.9312 81.0001 31.4286Z"
          fill="white"
          stroke="black"
          stroke-width="2"
        />
        <ellipse
          cx="25.5714"
          cy="45.1429"
          rx="8.57143"
          ry="12.1429"
          fill="black"
        />
        <ellipse
          cx="63.2858"
          cy="45.1429"
          rx="8.57143"
          ry="12.1429"
          fill="black"
        />
      </svg>

      <div className={styles.separator}></div>
    </section>
  );
};

export default SeparatorLine;
