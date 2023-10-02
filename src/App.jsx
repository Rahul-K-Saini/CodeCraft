import React, { useState } from 'react';
import Editor from './components/Editor';

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');

  const handleHtmlChange = (value) => {
    setHtml(value);
  };

  const handleCssChange = (value) => {
    setCss(value);
  };

  const handleJavascriptChange = (value) => {
    setJavascript(value);
  };

  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${javascript}
        </script>
      </body>
    </html>
  `;

  return (
    <div>
      <Editor
        language="html"
        value={html}
        onChange={handleHtmlChange}
      />
      <Editor
        language="css"
        value={css}
        onChange={handleCssChange}
      />
      <Editor
        language="javascript"
        value={javascript}
        onChange={handleJavascriptChange}
      />
      <iframe className='w-[500px]' srcDoc={iframeSrcDoc} />
    </div>
  );
};

export default App;
