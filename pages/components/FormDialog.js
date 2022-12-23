import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../../styles/Home.module.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.button}>
        <a onClick={handleClickOpen}>Ask Question</a>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ask a Question here</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Without any fear for your privacy, you can ask anything you want. We won't tell anyone!`}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="Your Question"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ask</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
