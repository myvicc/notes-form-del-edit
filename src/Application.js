import React, {useState} from "react";

import {
    Box,
    Container,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    IconButton
} from "@mui/material";
import { Delete, BorderColor } from "@mui/icons-material";
import {NotesForm} from "./components/NotesForm";
import {EditModal} from "./components/EditModal";


function Application() {
   const [notes, setNotes] = useState([]);
   const [open, setOpen] = useState(false);
   const [editNote, setEditNote] = useState({});

   function createNote({title, description}) {
       setNotes((prevState) => {
           return [
               ...prevState,
               {
                   title,
                   description,
                   id: crypto.randomUUID()
               }
           ]
       })
   }

   function deleteNote(id) {
       return () => {
           setNotes((prevState) =>
               prevState.filter((note) => note.id !== id));
       };
   }

   function updateNote(id, title, description) {
           setNotes((prevState) => {
               return prevState.map((note) => {
                   if (note.id === id) {
                       return {
                           id,
                           title,
                           description
                       };
                   }
                   return editNote;
               });
           });
   }

    return <Box>
        <Container>
            <Stack spacing={2}>
                <Typography variant="h4" align="center">Create note</Typography>
                <NotesForm onSubmit={createNote}/>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                notes.map(({title, description, id}, index) => {
                                    return (
                                        <TableRow key={id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{title}</TableCell>
                                            <TableCell>{description}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => {
                                                    setOpen(true);
                                                    setEditNote({id, title, description})
                                                }}>
                                                    <BorderColor />
                                                </IconButton>
                                                <IconButton onClick={deleteNote(id)}>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Container>
        <EditModal
            open={open}
            onClose={() => {
              setOpen(false)}}
            editNote={editNote}
            onEdit={updateNote}
        />
    </Box>
}

export default Application;