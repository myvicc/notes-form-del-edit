import React from "react";
import {Dialog, DialogTitle, DialogContent, Box} from "@mui/material";
import {NotesForm} from "./NotesForm";

export const EditModal = ({ open = false, onClose, editNote, onEdit}) => {
    const onSubmit = (values) => {
        onEdit(editNote.id, values.title, values.description);
        onClose();
    };

    return (
        <Dialog  onClose={onClose} fullWidth open={open}>
            <DialogTitle>{`Edit ${editNote.title}`}</DialogTitle>
            <DialogContent>
                <Box sx={{paddingTop: 2}}>
                    <NotesForm
                        onSubmit={onSubmit}
                        initialTitle={editNote.title}
                        initialDescription={editNote.description}/>
                </Box>
            </DialogContent>
        </Dialog>
    )
}