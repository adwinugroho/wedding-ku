// lib/toast-store.ts
type Toast = {
  id: string;
  message: string;
  type?: "success" | "error";
};

type Listener = (toasts: Toast[]) => void;

let toasts: Toast[] = [];
let listeners: Listener[] = [];

export function toast(message: string, type: "success" | "error" = "success") {
  const id = crypto.randomUUID();
  const newToast: Toast = { id, message, type };
  toasts.push(newToast);
  listeners.forEach((cb) => cb([...toasts]));

  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    listeners.forEach((cb) => cb([...toasts]));
  }, 3000); // auto dismiss in 3s
}

export function subscribe(listener: Listener) {
  listeners.push(listener);
  listener(toasts);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
