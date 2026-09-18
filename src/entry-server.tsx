import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './App';

export function render(url: string) {
  return {
    html: renderToString(
      <React.StrictMode>
        <MemoryRouter initialEntries={[url]}>
          <AppRoutes />
        </MemoryRouter>
      </React.StrictMode>
    )
  };
}
