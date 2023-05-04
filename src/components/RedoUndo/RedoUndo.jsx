import React, { useState } from "react";

export const RedoUndo = () => {
  const initialState = {
    name: "Hello",
    fruits: ["mango", "jackfruit"],
    names: ["rakib", "akib"],
    text: "long-termask,pdfoawkopfk fkafkapf",
  };

  const [builder, setBuilder] = useState(initialState);
  const [redos, setRedos] = useState([]);
  const [undos, setUndos] = useState([]);
  const names = ["akatsuki", "sabbir", "galib", "mehedi"];

  const undoBuilderVersion = () => {
    const previousState = { ...builder };
    let count = 0;

    console.log(count++);
    let temp = [];
    temp.push([...temp, previousState]);

    setUndos([...undos, previousState]);
  };

  const handleUndos = () => {
    console.log(undos);

    const accessLastItem = undos.length - 1;
    setRedos([...redos, undos[accessLastItem]]);

    setBuilder(undos[accessLastItem]);
  };
  return (
    <>
      Actions:
      <div className="flex gap-4">
        <button
          className="bg-red-200"
          onClick={() => {
            setBuilder({
              ...builder,
              name: names[Math.floor(Math.random() * names.length)],
            });
            undoBuilderVersion();
          }}
        >
          Update Name
        </button>
        <button className="bg-green-200">Update Text</button>

        <button className="bg-red-200">Update Builder</button>
        <button className="bg-violet-200">Redo</button>
        <button
          className="bg-blue-200"
          onClick={() => {
            handleUndos();
          }}
        >
          Undo
        </button>
      </div>
      <div>
        <p>Name: {builder.name}</p>

        <h3>Fruits:</h3>
        <ul>
          {builder.fruits.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h3>Fruits:</h3>

        <ul>
          {builder.names.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <p>Info:</p>
        <textarea value={builder.text} className="w-full my-5"></textarea>
      </div>
    </>
  );
};
