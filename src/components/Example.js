import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function Example(props) {
  const [show, setShow] = useState(false);

  
    function handleClose()
    {
        setShow(false);
    }
    function handleShow()
    {
        setShow(true);
    }
    function Save()
    {
        setShow(false);
        props.Delete();
    }
  return (
    <>
      <Button variant="danger" onClick={handleShow} size="sm">
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;
