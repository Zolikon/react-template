import { useRef } from "react";
import { BUILT_AT, CONFIG } from "./environment";
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

  const onBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      closeDialog();
    }
  };

  return (
    <>
      <div className="flex flex-col h-full w-full">
        <header className="h-[10%] flex items-center justify-center bg-linear-to-br from-green-700 to-green-500">
          <div className="text-center m-auto font-bold text-3xl text-stone-300">Hello world</div>
        </header>
        <main className="flex flex-col grow p-2">
          <div className="flex flex-row h-full">
            <div className="w-1/5 bg-gray-200 flex flex-col items-center justify-center">
              <IconButton iconName="hiking" onClick={() => console.log("test")} />
              <Button name="Click me" onClick={() => console.log("test")} />
            </div>
            <div className="w-4/5 bg-gray-400 flex items-center justify-center">{CONFIG} active</div>
            <div className="w-4/5 bg-gray-400 flex items-center justify-center">Built at {BUILT_AT}</div>
          </div>
        </main>

        <footer className="h-[20px] xl:h-[40px] text-stone-100 bg-linear-to-br from-green-700 to-green-500 flex justify-end gap-4 px-2 items-center">
          <button onClick={openDialog}>About</button>
          <p className="">{`Template project | ${BUILT_AT} | 2024 - ${new Date().getFullYear()}`}</p>
        </footer>
      </div>
      <dialog ref={dialogRef} onClick={onBackdropClick} className="rounded-md w-[80vw] h-[80vh] m-auto">
        <div className=" p-4 flex flex-col items-center justify-between size-full">
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
