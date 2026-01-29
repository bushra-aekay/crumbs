import { useEffect, useState } from "react";

export default function Toast({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-24 right-6 bg-white border-l-4 border-primary px-4 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-primary text-xl">✓</span>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
}
