import React from "react";
import styles from "./Modal.module.scss";
import Modal from "react-bootstrap/Modal";

interface ModalCompProps {
    show: boolean;
    onClose: () => void;
    alertType: "alert" | "confirm";
    title: string;
    message: string;
    onConfirm?: () => void;
    Icon?: React.FC<any>
}

function Alert({
    show,
    onClose,
    alertType,
    title,
    message,
    onConfirm,
    Icon,
}: ModalCompProps) {
    return (
        <div className={`${styles.Modal_contain}`}>
            <Modal
                show={show}
                onHide={onClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={`${styles.Modal_contain_inner} ${styles.delete_new_modal} nml_modal`}
                style={{ zIndex: 9999999 }}
            >
                <Modal.Header className="pb-0 border-0 justify-content-center">

                </Modal.Header>
                <Modal.Body className="text-center">
                    {Icon && <Icon />}
                    <Modal.Title className={`mt-3 mb-2 font-bold ${styles.alert_title}`} id="contained-modal-title-vcenter">{title}</Modal.Title>
                    <p className="mb-1">{message}</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <div className={styles.footer_btn}>
                        {alertType === "confirm" && (
                            <button onClick={onClose} className={`${styles.primary_btn} px-3`}>
                                Cancel
                            </button>
                        )}
                        <button
                            onClick={alertType === "confirm" ? onConfirm : onClose}
                            className={`${styles.primary_btn} px-3`}
                        >
                            {alertType === "alert" ? "OK" : "Confirm"}
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Alert;
