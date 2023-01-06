import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "./inscription.css";

export default function Inscription() {
  return (
    <>
      <div class="page">
        <div class="header">
          <h1 class="titre">RPG Life</h1>
        </div>

        <div class="main-container">
          <div class="container">
            <div class="lien-connexion">
              <a href="/connexion" id="connexion">
                Connexion
              </a>
              <a href="/inscription" id="inscription">
                S'inscrire
              </a>
            </div>
            <div class="formulaire">
              <div class="input-text">
                <TextField
                  id="outlined-basic"
                  label="Pseudo"
                  variant="outlined"
                  inputProps={{ className: "textfield_input" }}
                  sx={{ input: { color: "#FFFFFF80" } }}
                />
              </div>
              <div class="input-text">
                <TextField
                  id="outlined-basic"
                  label="Mot de passe"
                  variant="outlined"
                  inputProps={{ className: "textfield_input" }}
                  sx={{ input: { color: "#FFFFFF80" } }}
                />
              </div>
              <div class="input-text">
                <TextField
                  id="outlined-basic"
                  label="Cofirmation mot de passe"
                  variant="outlined"
                  inputProps={{ className: "textfield_input" }}
                  sx={{ input: { color: "#FFFFFF80" } }}
                />
              </div>
            </div>
            <div class="button-submit">
              <Button
                sx={{
                  color: "rgb(0, 153, 153)",
                  backgroundColor: "#00000020",
                  borderColor: "rgb(0, 153, 153)",
                }}
                href="/"
                variant="outlined"
                inputProps={{ className: "button" }}
              >
                Inscription
              </Button>
            </div>
          </div>
        </div>
        <div class="nav-bar"></div>
      </div>
    </>
  );
}
