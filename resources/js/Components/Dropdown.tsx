import { useState, createContext, useContext, Fragment, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { Link, InertiaLinkProps } from '@inertiajs/react';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';

const DropDownContext = createContext<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    toggleOpen: () => void;
}>({
    open: false,
    setOpen: () => {},
    toggleOpen: () => {},
});

const Dropdown = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="position-relative">{children}</div>
        </DropDownContext.Provider>
    );
};

const Trigger = ({ children }: PropsWithChildren) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && <div className="position-fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
        </>
    );
};

const Content = ({ align = 'end', width = 'auto', children }: PropsWithChildren<{ align?: 'start' | 'end'; width?: string }>) => {
    const { open, setOpen } = useContext(DropDownContext);

    return (
        <>
            <BootstrapDropdown.Menu show={open} align={align} style={{ width: width === 'auto' ? 'auto' : `${width}px` }}>
                <div onClick={() => setOpen(false)}>
                    <BootstrapDropdown.ItemText>{children}</BootstrapDropdown.ItemText>
                </div>
            </BootstrapDropdown.Menu>
        </>
    );
};

const DropdownLink = ({ className = '', children, ...props }: InertiaLinkProps) => {
    return (
        <Link
            {...props}
            className={
                'dropdown-item text-start text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ' +
                className
            }
        >
            {children}
        </Link>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
