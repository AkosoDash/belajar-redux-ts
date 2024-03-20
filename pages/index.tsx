import Image from "next/image";
import { Inter } from "next/font/google";
import noteStore, { addNote, removeNote } from "@/src/store/store";
import { FormEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { log } from "console";

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
      className={`flex min-h-screen flex-col items-center justify-center bg-black/80 p-24 ${inter.className}`}
    >
      <div className=" w-full grid grid-cols-2 gap-4">
        {noteList?.map((data: any, index: number) => {
          return (
            <article
              className="bg-white text-black rounded-lg w-full shadow shadow-lg p-2 relative"
              key={index}
              onClick={() => dispatch(removeNote({ id: data.noteId }))}
            >
              <div className="flex flex-row items-center gap-2">
                <h2 className="w-10 h-10 p-2 bg-gray-500 text-white border-black flex items-center justify-center rounded-md">
                  #{data.noteId}
                </h2>
                <h2 className="">{data.noteTitle}</h2>
              </div>
              <p className="line-clamp-3 mt-4">{data.noteDescription}</p>
            </article>
          );
        })}
      </div>
      <div className="w-full fixed bottom-0 flex flex-row items-center justify-between px-8 gap-8 bg-white h-24 rounded-t-xl">
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
            className="w-1/5 py-2 bg-white text-black/75 rounded-full font-black border border-2 border-black "
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
