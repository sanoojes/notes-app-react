import { Button } from "@/components/ui/button";
import Notes from "@/components/ui/notes";
import { useState } from "react";
import { Textarea } from "./components/ui/textarea";

export default function App() {
  const [notes, setNotes] = useState(["Sample note"]);
  const [input, setInput] = useState("");

  const handleDeleteNote = (indexToDelete: number) => {
    setNotes((prevNotes) =>
      prevNotes.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleAddNote = () => {
    if (input.trim()) {
      // Only add note if input is not empty
      setNotes((prevNotes) => [...prevNotes, input]);
      setInput("");
    }
  };

  return (
    <>
      <main className="flex-col-center bg-neutral-950 h-screen w-screen text-neutral-50 default-gap">
        <div className="flex-col-center default-gap default-box-padding default-border default-rounded default-w space-y-4">
          <h1 className="text-center text-3xl font-bold">Notes App</h1>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a new note..."
          />
          <Button onClick={handleAddNote}>Create New Note</Button>
        </div>
        <div className="flex-col-center default-gap default-rounded default-w relative">
          {notes.map((note, index) => (
            <Notes key={String(index)} closeFn={() => handleDeleteNote(index)}>
              {note}
            </Notes>
          ))}
        </div>
      </main>
    </>
  );
}

