import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import { Button } from "@mui/material";
import CardTache from "../../components/molecules/cardTache/CardTache";

import './taches.css'
import '../base.css'

export default function Tache() {

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
                        <CardTache></CardTache>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
                    </div>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
                    </div>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
                    </div>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
                    </div>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
                    </div>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
                    </div>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
                    </div>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
                    </div>
                    <div class="card">
                        <p>Nom de la tâche</p>
                        <p>Catégorie de la tâche</p>
                        <p>Difficulté de la tâche</p>
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
  
  