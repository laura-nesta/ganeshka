import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import './parametres.css'
import '../base.css'

export default function Parametre() {

    return (
     <>
     <div class = "page">
            <div class="header">
                 <h1 class="titre" >RPG Life</h1>
             </div>

             <div class="main-container">
             <div class="container">
                        <h2>Catégories : </h2>
                        gérer ajouter supprimer
                        <h2>Taches : </h2>
                        gerer ajouter supprimer
                    </div>
             </div>

             <div class="nav-bar">
                <BottomNavBar></BottomNavBar>
             </div>

        </div>
     </>
    );
  }
  
  