import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import "./accueil.css";
import "../base.css";

import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Accueil() {
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [displayedLevel, setDisplayedLevel] = useState([]);

  const categories = [
    {
      id: 1,
      nom: "Social",
      niveau: 5,
      userId: 1,
    },
    {
      id: 2,
      nom: "Pro",
      niveau: 8,
      userId: 1,
    },
    {
      id: 3,
      nom: "Santé",
      niveau: 7,
      userId: 1,
    },
    {
      id: 4,
      nom: "Lecture",
      niveau: 5,
      userId: 1,
    },
    {
      id: 5,
      nom: "Sport",
      niveau: 6,
      userId: 1,
    },
    {
      id: 6,
      nom: "Maison",
      niveau: 4,
      userId: 1,
    },
    {
      id: 7,
      nom: "Loisir",
      niveau: 2,
      userId: 2,
    },
    {
      id: 7,
      nom: "Bureau",
      niveau: 8,
      userId: 2,
    },
    {
      id: 7,
      nom: "Vie",
      niveau: 4,
      userId: 2,
    },
  ];

  useEffect(() => {
    displayLabels(1);
  });

  function displayLabels(userId) {
    const tab = [];
    const tabUser = categories.filter((el) => el.userId === userId);
    tabUser.forEach((el) => tab.push(el.nom));
    setDisplayedTasks(tab);

    const tabLevel = [];
    const tabFilter = categories.filter((el) => el.userId === userId);
    tabFilter.forEach((el) => tabLevel.push(el.niveau));
    setDisplayedLevel(tabLevel);
  }

  const data = {
    labels: displayedTasks,
    datasets: [
      {
        label: "niveau",
        data: displayedLevel,
        backgroundColor: "rgba(65, 243, 243, 0.2)",
        borderColor: "rgba(65, 243, 243, 0.3)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      min: 0,
      max: 10,
    },
    scales: {
      r: {
        ticks: {
          display: false, // Hides the labels in the middel (numbers)
        },
        grid: {
          color: "#FFFFFF30",
        },
        angleLines: {
          color: "rgba(0, 153, 153, 0.5)",
        },
        pointLabels: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div class="page">
        <div class="header">
          <h1 class="titre">RPG Life</h1>
        </div>

        <div class="main-container">
          <div class="container">
            <div class="container-chart">
              <Radar data={data} options={options} />
            </div>
            <div class="add-categorie">
              <Button
                sx={{
                  color: "rgb(0, 153, 153)",
                }}
              >
                Nouvelle compétence +
              </Button>
            </div>
          </div>
        </div>

        <div class="nav-bar">
          <BottomNavBar></BottomNavBar>
        </div>
      </div>
      {/* <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`compte`}>Compte</a>
              </li>
              <li>
                <a href={`agenda`}>Agenda</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div> */}
    </>
  );
}
