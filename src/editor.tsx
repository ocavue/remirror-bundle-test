import "@remirror/styles/all.css";

import { Remirror, ThemeProvider, useRemirror } from "@remirror/react";
import React from "react";
import { ItalicExtension, EmojiExtension } from "remirror/extensions";
import emojiData from "svgmoji/emoji.json";

const Editor: React.FC = () => {
  const { manager } = useRemirror({
    extensions: () => [
      new ItalicExtension(),
      new EmojiExtension({ plainText: true, data: emojiData }),
    ],
    content: "<p>Some text</p>",
    stringHandler: "html",
  });

  const [editable, setEditable] = React.useState(true);

  return (
    <ThemeProvider>
      <Remirror manager={manager} editable={editable} />
      <button onClick={() => setEditable(!editable)}>
        Toggle editable (currently {editable.toString()})
      </button>
    </ThemeProvider>
  );
};

export default Editor;
