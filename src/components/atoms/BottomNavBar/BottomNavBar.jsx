import React from "react";
import './bottomNavBar.css'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import icone_compte from './icons/icone_compte.svg'
import icone_toile from './icons/icone_toileCompetence.svg'
import icone_done from './icons/icone_done.svg'
import icone_parametres from './icons/icone_parametres.svg'
import icone_agenda from './icons/icone_agenda.svg'

export const BottomNavBar = () => {

    const [value, setValue] = React.useState(0);

    return (
        <>
            <BottomNavigation  
            sx={{ width: 300 }}
            // showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }} 
            class="bottomNav">
                {/* <BottomNavigationAction label="" href={`parametre`} icon={<img class="icone-menu" src={icone_parametres} alt="Réglages" />} /> */}
                <BottomNavigationAction label="" href={`/`} icon={<img class="icone-menu" src={icone_toile} alt="Compétences" />} />
                <BottomNavigationAction  label="" href={`tache`} icon={<img class="icone-menu" src={icone_done} alt="A faire" />} />
                <BottomNavigationAction label="" href={`agenda`} icon={<img class="icone-menu" src={icone_agenda} alt="Agenda" />} />
                <BottomNavigationAction label="" href={`compte`} icon={<img class="icone-menu" src={icone_compte} alt="Compte" />}/>
            </BottomNavigation>
    </>
    )
}