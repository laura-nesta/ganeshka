import './cardTache.css'
import {useState} from 'react';
export default function CardTache(props) {
    const [done, isDone] = useState(false);
    const levelClass = "skill-level show-" + props.niveau
    return (
     <div onClick={() => {
        isDone(!done)
     }} className={done? "card done" : "card"}>
        <div class="info-tache">
            <p class="tache-nom">{props.nom}</p>
            <p class="tache-categorie">{props.categorie}</p>
        </div>
        <div class="difficulte">
            <p>Difficulté:</p>
                <div class={levelClass}>
                    <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                </div>
        </div>
    </div>
    );
  }
