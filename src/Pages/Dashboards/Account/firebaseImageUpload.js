import React, { useState, useEffect } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { Button } from "reactstrap";
function App() {
  const [message, setMessage] = useState("Hi there, how are you?");

  useEffect(() => {
    setMessage("State1");
    console.log(message);

    setTimeout(() => {
      setMessage("State2");
      console.log(message);
    }, 1000);
  });

  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    const storage = firebase.storage();
    e.preventDefault();
    const uploadTask = storage.ref(`/products/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("products")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
          localStorage.setItem("gotDownloadURL", url);
          console.log(localStorage.getItem("gotDownloadURL"));
        });
    });
  }

  return (
    <div>
      <form role="imgForm" name="imgForm" id="imgForm" onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <Button
          disabled={!file}
          style={{
            alignSelf: "center",
            display: "block",
            position: "relative",
            width: "100%",
          }}
          type="submit"
        >
          Upload Image And Get URL
        </Button>
      </form>
      <img src={url} alt="" />
    </div>
  );
}
export default App;
