import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../../styles/Home.module.css";
import registerQuestion from "../api/registerQuestion";

export default function FormDialog(props) {
  const username = props.username;
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAskQuestion = () => {
    if (question != "") {
      registerQuestion(username, question);
      setOpen(false);
    } else {
      alert("Empty field");
    }
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
            onChange={(e) => setQuestion(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAskQuestion}>Ask</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
