import { Inter } from "next/font/google";
import { addNote, removeNote } from "@/src/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteDescription, setNoteDescription] = useState<string>("");
  const dispatch = useDispatch();
  const noteList = useSelector((state: any) => state.noteSlice.notes);

  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(
      addNote({
        noteTitle: noteTitle,
        noteDescription: noteDescription,
      })
    );
    setNoteDescription("");
    setNoteTitle("");
  }

  return (
    <main
      className={`flex min-h-full flex-col items-center justify-center bg-black/80 p-24 ${inter.className}`}
    >
      <div className=" w-full grid grid-cols-2 gap-4">
        {noteList?.map((data: any, index: number) => {
          return {};
        })}
      </div>
      <div className="w-full lg:w-5/6 fixed bottom-0 flex flex-row items-center justify-between px-8 gap-8 bg-white h-24 rounded-t-xl">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="w-full flex flex-row gap-x-8"
        >
          <input
            type="text"
            className="py-2 px-2 w-2/5 rounded-md border border-2 border-black text-black"
            placeholder="Masukkan Judul"
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
            required
          />
          <input
            type="text"
            className="py-2 px-2 w-2/5 rounded-md border border-2 border-black text-black"
            placeholder="Masukkan Deskripsi"
            onChange={(e) => setNoteDescription(e.target.value)}
            value={noteDescription}
            required
          />
          <button
            type="submit"
            className="w-1/5 py-2 bg-white text-black/75 rounded-full font-black border border-2 border-black"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
