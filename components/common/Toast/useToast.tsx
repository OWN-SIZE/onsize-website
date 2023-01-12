import { useRef, useState } from "react";

const useToast = () => {
  const [message, setMessage] = useState("");
  const [isOpenToast, setIsOpenToast] = useState(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = (message: string) => {
    setIsOpenToast(true);
    setMessage(message);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsOpenToast(false);
      setMessage("");
    }, 3000);
    toastTimer.current = timer;
  };

  return { isOpenToast, message, showToast };
};

export default useToast;