import { Fragment, PropsWithChildren } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';

export default function Modal({
    children,
    show = false,
    size = 'lg', // Set a default size or pass it as a prop
    closeable = true,
    onClose = () => {},
}: PropsWithChildren<{
    show: boolean;
    size?: 'sm' | 'lg' | 'xl'; // Adjust size values according to Bootstrap's modal sizes
    closeable?: boolean;
    onClose: CallableFunction;
}>) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    return (
        <BootstrapModal show={show} onHide={close} size={size} centered>
            <BootstrapModal.Dialog>
                <BootstrapModal.Body className={`bg-white rounded-lg overflow-hidden shadow-xl`}>
                    {children}
                </BootstrapModal.Body>
            </BootstrapModal.Dialog>
        </BootstrapModal>
    );
}
