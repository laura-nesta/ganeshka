import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import CardTache from "../../components/molecules/cardTache/CardTache";

import './agenda.css'
import '../base.css'

export default function Agenda() {

  return (
   <>
   <div class = "page">
            <div class="header">
                 <h1 class="titre" >RPG Life</h1>
             </div>

             <div class="main-container">
                <div class="container">
                    <div class="menu-agenda">                        
                        <a href="agenda" class="jour">Jour</a>
                        <a href="agenda" class="semaine">Semaine</a>
                        <a href="agenda" class="mois">Mois</a>
                    </div>
                    <div class="taches-liste">
                        <CardTache></CardTache>
                        <div class="card">
                            <div>
                                <p class="tache-nom">Nom</p>
                                <p class="tache-categorie">Categorie</p>
                            </div>
                            <div class="difficulte">
                                <p>Difficulté:</p>
                                    <div class="skill-level show-0">
                                        <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                                    </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <p class="tache-nom">Faire 50 squats</p>
                                <p class="tache-categorie">Sport</p>
                            </div>
                            <div class="difficulte">
                                <p>Difficulté:</p>
                                    <div class="skill-level show-5">
                                        <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                                    </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <p class="tache-nom">Lire un chapitre</p>
                                <p class="tache-categorie">Lecture</p>
                            </div>
                            <div class="difficulte">
                                <p>Difficulté:</p>
                                    <div class="skill-level show-2">
                                        <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                                    </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <p class="tache-nom">Lire un chapitre</p>
                                <p class="tache-categorie">Lecture</p>
                            </div>
                            <div class="difficulte">
                                <p>Difficulté:</p>
                                    <div class="skill-level show-2">
                                        <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                                    </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <p class="tache-nom">Lire un chapitre</p>
                                <p class="tache-categorie">Lecture</p>
                            </div>
                            <div class="difficulte">
                                <p>Difficulté:</p>
                                    <div class="skill-level show-2">
                                        <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                                    </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <p class="tache-nom">Lire un chapitre</p>
                                <p class="tache-categorie">Lecture</p>
                            </div>
                            <div class="difficulte">
                                <p>Difficulté:</p>
                                    <div class="skill-level show-2">
                                        <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                                    </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <p class="tache-nom">Lire un chapitre</p>
                                <p class="tache-categorie">Lecture</p>
                            </div>
                            <div class="difficulte">
                                <p>Difficulté:</p>
                                    <div class="skill-level show-2">
                                        <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                                    </div>
                            </div>
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

