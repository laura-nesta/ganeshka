import './cardTache.css'

export default function CardTache() {

    return (
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
    );
  }
  
  