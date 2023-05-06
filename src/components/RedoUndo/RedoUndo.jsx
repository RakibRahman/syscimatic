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
  const [status, setStatus] = useState(0);
  const names = [
    "akatsuki",
    "sabbir",
    "galib",
    "mehedi",
    "y2j",
    "taker",
    "cena",
  ];

  const undoBuilderVersion = () => {
    const previousState = { ...builder };
    setStatus(status + 1);

    setUndos([...undos, previousState]);
  };

  const handleUndos = () => {
    setStatus(status - 1);

    const accessLastItem = undos.length - 1;
    const unDoArr = undos.slice(0, accessLastItem);

    // console.log({ unDoArr });
    console.log(undos);
    setUndos(unDoArr);
    setRedos([...redos, builder]);

    setBuilder(undos[accessLastItem]);
  };

  const handleRedos = () => {
    if (redos.length === 0) return;
    setStatus(status - 1);

    const accessLastItem = redos.length - 1;
    const unDoArr = redos.slice(0, accessLastItem);

    // console.log({ unDoArr });
    setRedos(unDoArr);
    setUndos([...undos, builder]);

    setBuilder(redos[accessLastItem]);
  };

  console.log({ undos });
  console.log({ redos });
  return (
    <>
      {status}
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
        <button className="bg-green-200">Add Fruit</button>

        <button className="bg-red-200">Update Builder</button>
        <button
          className="bg-violet-200"
          onClick={() => {
            if (redos.length === 0) {
              alert("No History");
              return;
            }
            handleRedos();
          }}
        >
          Redo
        </button>
        <button
          className="bg-blue-200"
          onClick={() => {
            if (undos.length === 0) {
              alert("No History");
              return;
            }
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
        <textarea
          value={builder.text}
          className="w-full my-5"
          onChange={(e) => {
            setBuilder({
              ...builder,
              text: e.target.value,
            });
            undoBuilderVersion();
          }}
        ></textarea>
      </div>
    </>
  );
};
