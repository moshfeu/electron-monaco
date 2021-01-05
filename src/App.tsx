import React from 'react';
import Editor, { monaco } from '@monaco-editor/react';
import path from 'path';

function ensureFirstBackSlash(str: string) {
  return str.length > 0 && str.charAt(0) !== '/' ? `/${str}` : str;
}

function uriFromPath(_path: string) {
  const pathName = path.resolve(_path).replace(/\\/g, '/');
  return encodeURI(`file://${ensureFirstBackSlash(pathName)}`);
}

monaco.config({
  paths: {
    vs: uriFromPath(
      path.join(__dirname, '../node_modules/monaco-editor/min/vs')
    ),
  },
});

const value = `function itsWorking() {
  console.log('yahhhh!');
}`;

export default function App() {
  return (
    <div>
      <Editor
        width="100vw"
        height="100vh"
        language="javascript"
        value={value}
      />
    </div>
  );
}
