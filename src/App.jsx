import { useRef } from "react";
import { CONFIG } from "./environment";
import IconButton from "./components/IconButton";
import Button from "./components/Button";

function App() {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <div className="flex flex-col h-full w-full">
        <header className="h-[10%] flex items-center justify-center bg-gradient-to-br from-green-700 to-green-500">
          <div className="text-center m-auto font-bold text-3xl text-stone-300">Hello world</div>
        </header>
        <main className="flex flex-col flex-grow p-2">
          <div className="flex flex-row h-full">
            <div className="w-1/5 bg-gray-200 flex flex-col items-center justify-center">
              <IconButton iconName="hiking" onClick={() => console.log("test")} />
              <Button name="Click me" onClick={() => console.log("test")} />
            </div>
            <div className="w-4/5 bg-gray-400 flex items-center justify-center">{CONFIG} active</div>
          </div>
        </main>

        <footer className="h-[20px] xl:h-[40px] bg-gray-200 bg-gradient-to-br from-green-700 to-green-500 flex justify-end gap-4 px-2 items-center">
          <button onClick={openDialog}>About</button>
          <p className="">Template project | 2024</p>
        </footer>
      </div>
      <dialog ref={dialogRef}>
        <div className="w-[80vw] h-[80vh] p-4 flex flex-col items-center justify-between">
          <p className="font-bold text-2xl">Title</p>
          <div>
            <p>Line 1</p>
            <p>Line 2</p>
            <p>Line 3</p>
          </div>
          <button onClick={closeDialog} className="bg-green-600 py-2 px-4 rounded-md text-stone-200">
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

export default App;
