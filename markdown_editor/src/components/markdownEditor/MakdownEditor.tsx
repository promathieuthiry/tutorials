import MDEditor, { EditorContext, commands } from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import "./markdown_editor.css";
import { useContext } from "react";
import { HeadingIcon } from "../../assets/HeadingIcon";
import { BoldIcon } from "../../assets/BoldIcon";
import { ItalicIcon } from "../../assets/ItalicIcon";
import { QuoteIcon } from "../../assets/QuoteIcon";
import { CodeIcon } from "../../assets/CodeIcon";
import { LinkIcon } from "../../assets/LinkIcon";
import { OrderedListIcon } from "../../assets/OrderedListIcon";
import { UnorderedListIcon } from "../../assets/UnorderedListIcon";
import { CheckedListIcon } from "../../assets/CheckedListIcon";

const WriteButton = () => {
  const { preview, dispatch } = useContext(EditorContext);

  const click = () => {
    if (dispatch) {
      dispatch({
        preview: "edit",
      });
    }
  };
  return (
    <span
      style={{
        backgroundColor: preview === "edit" ? "#fff" : "#f6f8fa",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: preview === "edit" ? "8px" : "0px",
        borderRight: preview === "edit" ? "1px solid #d0d7de" : "none",
        padding: "11px 16px 12px 16px",
        fontSize: "14px",
      }}
      onClick={click}
    >
      Write
    </span>
  );
};
const PreviewButton = () => {
  const { preview, dispatch } = useContext(EditorContext);
  const click = () => {
    if (dispatch) {
      dispatch({
        preview: "preview",
      });
    }
  };
  return (
    <span
      style={{
        backgroundColor: preview === "preview" ? "#fff" : "#f6f8fa",
        borderTopLeftRadius: preview === "preview" ? "8px" : "0px",
        borderTopRightRadius: preview === "preview" ? "8px" : "0px",
        borderRight: preview === "preview" ? "1px solid #d0d7de" : "none",
        borderLeft: preview === "preview" ? "1px solid #d0d7de" : "none",
        padding: "11px 16px 12px 16px",
        fontSize: "14px",
      }}
      onClick={click}
    >
      Preview
    </span>
  );
};

const editPreviewCommand = {
  name: "edit-preview",
  keyCommand: "edit-preview",
  buttonProps: { "aria-label": "Generate Edit" },
  icon: <WriteButton />,
};

const customPreviewCommand = {
  name: "custom-preview",
  keyCommand: "custom-preview",
  buttonProps: { "aria-label": "Generate Preview" },
  icon: <PreviewButton />,
};

const customBoldCommand = {
  ...commands.bold,
  icon: <BoldIcon />,
};

const customItalicCommand = {
  ...commands.italic,
  icon: <ItalicIcon />,
};

const customQuoteCommand = {
  ...commands.quote,
  icon: <QuoteIcon />,
};

const customCodeCommand = {
  ...commands.code,
  icon: <CodeIcon />,
};

const customLinkCommand = {
  ...commands.link,
  icon: <LinkIcon />,
};

const customOrderedListCommand = {
  ...commands.orderedListCommand,
  icon: <OrderedListIcon />,
};

const customUnorderedListCommand = {
  ...commands.unorderedListCommand,
  icon: <UnorderedListIcon />,
};

const customCheckedListCommand = {
  ...commands.checkedListCommand,
  icon: <CheckedListIcon />,
};

type MarkdownEditorProps = {
  content: string;
  setContent: (text: string) => void;
};

export const MarkdownEditor = ({
  content,
  setContent,
}: MarkdownEditorProps) => {
  return (
    <div style={{ width: "600px" }}>
      <MDEditor
        height={300}
        visibleDragbar={false}
        commands={[
          editPreviewCommand,
          customPreviewCommand,
          commands.group(
            [
              commands.title1,
              commands.title2,
              commands.title3,
              commands.title4,
              commands.title5,
              commands.title6,
            ],
            {
              name: "title",
              groupName: "title",
              buttonProps: { "aria-label": "Insert title" },
              icon: <HeadingIcon />,
            }
          ),
          customBoldCommand,
          customItalicCommand,
          customQuoteCommand,
          customCodeCommand,
          customLinkCommand,
          commands.divider,
          customOrderedListCommand,
          customUnorderedListCommand,
          customCheckedListCommand,
        ]}
        extraCommands={[]}
        preview="edit"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        value={content}
        onChange={(val) => setContent(val ?? "")}
      />
    </div>
  );
};
