import { useState } from "react";
import "./App.css";
import { MarkdownEditor } from "./markdownEditor/MarkdownEditor";
import pullRequestMarkdown from "./markdownEditor/data";
import Footer from "./footer/Footer";

function App() {
  const [content, setContent] = useState(pullRequestMarkdown);

  return (
    <div className="content">
      <div className="markdown_container">
        <h1>Markdown Editor</h1>
        <MarkdownEditor content={content} setContent={setContent} />
      </div>
      <div className="separator" />
      <Footer />
    </div>
  );
}

export default App;
