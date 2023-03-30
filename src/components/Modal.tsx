import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import type { DialogProps } from "@material-tailwind/react";
import { handler } from "@material-tailwind/react/types/components/dialog";


interface ModalProps extends DialogProps {
  open: boolean
  handler: () => void
  children: React.ReactNode;
}
 const Modal: React.FC<ModalProps> = (props) => {
  const { children, handler, open = false } = props;
  return (
    <Fragment>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={open} handler={handler}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>{children}</DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handler} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handler}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
export default Modal