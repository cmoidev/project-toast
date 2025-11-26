import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, dismiss }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, variant, content }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast active variant={variant} dismiss={() => dismiss(id)}>
            {content}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
