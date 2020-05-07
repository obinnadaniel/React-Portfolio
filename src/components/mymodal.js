import React, {useState} from "react";
import { Modal } from "react-bootstrap";


function Mymodal (props) {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const { title, children, name} = props;
    return (
        <React.Fragment>
    <button className ="btn btn-info" onClick ={openModal}>{name}</button>
    <Modal show={open} onHide={closeModal} size="lg">
        <Modal.Header>
            <h2>{title}</h2>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-info" onClick ={closeModal}>close</button>
        </Modal.Footer>
    </Modal>
    </React.Fragment>
    );

}

export default Mymodal;