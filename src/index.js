import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from "./Application";


const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <div>
        <Application />
    </div>
  </React.StrictMode>
);
