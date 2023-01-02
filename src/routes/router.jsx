import React from 'react';
import ReactDOM from "react-dom/client";

import Accueil from './Accueil/Accueil';
import Compte from './Compte/Compte';
import Agenda from './Agenda/Agenda';
import Parametre from './Parametres/Parametres';
import Tache from './Taches/Taches';
import Connexion from './Connexion/Connexion';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const Router = () =>{
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Accueil/>,
        },
        {
            path: "compte",
            element: <Compte />,
          },
          {
            path: "agenda",
            element: <Agenda />,
          },
          {
            path: "parametre",
            element: <Parametre />,
          },
          {
            path: "tache",
            element: <Tache />,
          },
          {
            path: "connexion",
            element: <Connexion />,
          },
      ]);

      ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      );
  
}