import './cardTache.css'

export default function CardTache() {

    return (
     <div class="card">
        <div class="info-tache">
            <p class="tache-nom">Nom</p>
            <p class="tache-categorie">Categorie</p>
        </div>
        <div class="difficulte">
            <p>Difficulté:</p>
                <div class="skill-level show-5">
                    <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                </div>
        </div>
    </div>
    );
  }
  
  