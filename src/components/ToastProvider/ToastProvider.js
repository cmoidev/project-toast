import * as React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(toastBody) {
    setToasts((currentToasts) => [...currentToasts, toastBody]);
  }

  function removeToast(id) {
    setToasts((currentToasts) => {
      const updatedToasts = currentToasts.filter((toast) => toast.id !== id);
      return [...updatedToasts];
    });
  }

  useEscapeKey(() => setToasts([]));

  return (
    <ToastContext
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
