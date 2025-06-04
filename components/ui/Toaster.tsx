"use client";
import { useEffect, useState } from "react";
import { subscribe } from "@/lib/toast-store";

export default function Toaster() {
  const [toasts, setToasts] = useState<
    { id: string; message: string; type?: string }[]
  >([]);

  useEffect(() => {
    const unsub = subscribe(setToasts);
    return () => unsub();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-2 rounded shadow text-white transition-all
            ${toast.type === "error" ? "bg-red-500" : "bg-green-500"}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
