import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import { Button } from "@mui/material";
import CardTache from "../../components/molecules/cardTache/CardTache";

import React, { useState, useEffect } from 'react';

import './taches.css'
import '../base.css'

export default function Tache() {

    const [displayedTasks, setDisplayedTasks] = useState([]);
    
    const taches=[
        {
            nom : "Laver le sol",
            categorie : "Maison",
            niveau : 6,
            frequence : "jour"
        },
        {
            nom : "Faire 50 pompes",
            categorie : "Sport",
            niveau : 4,
            frequence : "semaine"
        },
        {
            nom : "Ranger le garage",
            categorie : "Maison",
            niveau : 2,
            frequence : "mois"
        },
        {
            nom : "Faire 1000 squats",
            categorie : "Sport",
            niveau : 8,
            frequence : "mois"
        },
        {
            nom : "Faire 2000 pompes",
            categorie : "Sport",
            niveau : 10,
            frequence : "mois"
        }
    ]

    useEffect(() => {
        displayTaches();
    })
    function displayTaches(){
        setDisplayedTasks(taches);
    }

    return (
     <>
     <div class = "page">
            <div class="header">
                 <h1 class="titre" >RPG Life</h1>
             </div>

             <div class="main-container">
                <div class="container">
                    <div class="add-task">
                        <Button 
                            variant="outlined"
                            inputProps={{className: "button__new"}}
                            >Nouvelle tâche +</Button>
                    </div>
                    <div class="tache-liste">
                        <div id="tache"> 
                            {displayedTasks.map((element, i) => {
                                return <CardTache 
                                        key={i + '_' + element.frequence } 
                                        nom={element.nom} 
                                        categorie={element.categorie} 
                                        niveau={element.niveau} 
                                        ></CardTache>
                            })} 
                        </div>
                    </div>
                    
                </div>
             </div>

             <div class="nav-bar">
                <BottomNavBar></BottomNavBar>
             </div>

        </div>
     </>
    );
  }
  
  