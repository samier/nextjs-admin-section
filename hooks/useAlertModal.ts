import { useState } from "react";

export function useAlertModal() {
  const [show, setShow] = useState(false);
  const [confirmAction, setConfirmAction] = useState<() => void>(
    () => () => {}
  );

  const openModal = (action: () => void) => {
    setConfirmAction(() => action);
    setShow(true);
  };

  const confirm = () => {
    confirmAction();
    setShow(false);
  };

  const close = () => setShow(false);

  return {
    show,
    openModal,
    confirm,
    close,
  };
}
