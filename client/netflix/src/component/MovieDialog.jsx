import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/movieSlice";
import  VideoBackgorund  from "../component/VideoBackground";

export default function MovieDialog() {
  const {open, id} = useSelector((store) => store.movie);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <VideoBackgorund movieId={id} bool={true}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
