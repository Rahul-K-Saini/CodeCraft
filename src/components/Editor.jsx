import React from 'react';
import  CodeMirror  from '@uiw/react-codemirror';

const Editor = ({ language, value, onChange }) => {
  return (
    <CodeMirror
      language={language}
      value={value}
      onChange={onChange}
      options={{
        theme: 'material',
        mode: language,
        lineNumbers: true,
      }}
    />
  );
};

export default Editor;
