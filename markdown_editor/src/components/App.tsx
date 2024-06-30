import { useState } from "react";
import "./App.css";
import { MarkdownEditor } from "./markdownEditor/MakdownEditor";
import pullRequestMarkdown from "./markdownEditor/data";

function App() {
  const [content, setContent] = useState(pullRequestMarkdown);

  return (
    <>
      <h1>Markdown Editor</h1>
      <MarkdownEditor content={content} setContent={setContent} />
    </>
  );
}

export default App;
