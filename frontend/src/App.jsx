import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// Componente principal
const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  // Função que busca todas as notas
  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => setNotes(response.data));
  }, []);

  // Função que adiciona uma nova nota
  const addNote = () => {
    const newNote = { id: Date.now().toString(), text: noteText };
    axios
      .post("http://localhost:3001/notes", newNote)
      .then((response) => setNotes([...notes, response.data]));
    setNoteText("");
  };

  // Função que deleta uma nota
  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:3001/notes/${id}`)
      .then(() => setNotes(notes.filter((note) => note.id !== id)));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Aplicativo de Notas</h1>
      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Digite uma nota..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addNote}>
          Adicionar Nota
        </button>
      </div>
      <ul className="list-group">
        {notes.map((note) => (
          <li
            key={note.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {note.text}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteNote(note.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
