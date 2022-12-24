import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../styles/Home.module.css";
import createProfile from "./api/createProfile";

export default function Create() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = async () => {
    await createProfile(username, name, bio);
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.button}>
        <a onClick={handleClickOpen}>Create Yours</a>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Let's get people to know you`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Take that step forward, let people ask you what they've always wanted to!`}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Your Username"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="bio"
            label="Your Bio"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setBio(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
