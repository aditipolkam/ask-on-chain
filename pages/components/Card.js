import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../../styles/Home.module.css";

const Card = (props) => {
  const [open, setOpen] = React.useState(false);
  const [answer, setAnswer] = React.useState("");
  const { question, selfAccount } = props;
  console.log("self", selfAccount);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayDialog = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Your Answer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Answer the question here, come on now! Take that step ahead`}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="answer"
            label="Your Answer"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>Ask</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div className={styles.card}>
      <h3>{question.question_string}</h3>
      {question.answer == "" && <span>To be answered</span>}
      {question.answer != "" && <p>question.answer</p>}
      {selfAccount && (
        <footer className={styles.cardfooter}>
          <button onClick={handleClickOpen}>
            {question.answer == "" ? <p>Answer</p> : <p>Change Answer</p>}
          </button>
          {displayDialog()}
        </footer>
      )}
      {!selfAccount && (
        <footer className={styles.cardfooter}>
          <button>😍</button>
          <button>💜</button>
          <button>🤮</button>
          <button>😂</button>
        </footer>
      )}
    </div>
  );
};

export default Card;
