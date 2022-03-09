import * as esbuild from "esbuild-wasm";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const test = "Test";

  const startService = async () => {
    const service = await esbuild
      .initialize({
        worker: true,
        wasmURL: "/esbuild.wasm",
      })
      .then(() => {
        esbuild.transform(test).then((result) => {
          console.log(result);
        });
      });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
