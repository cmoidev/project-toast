import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [variantOption, setVariantOption] = React.useState(DEFAULT_VARIANT);
  const [message, setMessage] = React.useState("");
  const { toasts, addToast, removeToast } = React.useContext(ToastContext);

  function handleAddNewToast() {
    addToast({ id: Math.random(), variant: variantOption, content: message });
    setMessage("");
    setVariantOption(DEFAULT_VARIANT);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddNewToast();
      }}
    >
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf toasts={toasts} dismiss={removeToast} />

        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                onChange={(event) => setMessage(event.target.value)}
                id="message"
                className={styles.messageInput}
                value={message}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;
              return (
                <div
                  key={id}
                  className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                  <label htmlFor={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variantOption === option}
                      onChange={(event) => setVariantOption(event.target.value)}
                    />
                    {option}
                  </label>
                </div>
              );
            })}
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
