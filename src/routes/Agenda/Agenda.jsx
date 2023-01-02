import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
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
                        <p class="jour">Jour</p>
                        <p class="semaine">Semaine</p>
                        <p class="mois">Mois</p>
                    </div>
                    <div class="taches-liste">
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

