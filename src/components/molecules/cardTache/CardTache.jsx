import './cardTache.css'

export default function CardTache(props) {

    // document.querySelector(".skill-level").classList.add("show-"+props.niveau)

    const levelClass = "skill-level show-" + props.niveau
    return (
     <div class="card">
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
  
  