import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import './accueil.css'
import '../base.css'

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );



export default function Accueil() {

const data = {
    labels: ['Social', 'Pro', 'Santé', 'Lecture', 'Sport', 'Maison'],
    datasets: [
      {
        label: 'niveau',
        data: [5, 8, 7, 5, 6, 4],
        backgroundColor: 'rgba(65, 243, 243, 0.2)',
        borderColor: 'rgba(65, 243, 243, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      min: 0,
      max: 10,
      ticks: {
            callback: function() {return ""},
            backdropColor: "rgba(0, 0, 0, 0)"
      }
    },
    scales: {
      r: {
        ticks: {
          display: false // Hides the labels in the middel (numbers)
        }
      }
    },
    plugins:{
      legend:{
         display:false
      }
   }
  };

    return (
      <>
      <div class = "page">
            <div class="header">
                 <h1 class="titre" >RPG Life</h1>
             </div>

             <div class="main-container">
                <div class="container">
                    <div class="container-chart">
                    <Radar data={data} options={options} />
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