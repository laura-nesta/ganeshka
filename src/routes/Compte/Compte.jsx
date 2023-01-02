import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import { Button } from "@mui/material";
import './compte.css'
import '../base.css'

export default function Compte() {
    return (
        <>
        <div class = "page">
                 <div class="header">
                      <h1 class="titre" >RPG Life</h1>
                  </div>
     
                  <div class="main-container">
                    <div class="container">
                        <h2>Nom : </h2>
                        <h2>Préom : </h2>
                        <h2>Age : </h2>
                        <h2>Surnom : </h2>
                        <h2>Sexe : </h2>
                        <div class="button-submit">
                            <Button 
                                href="connexion"
                                variant="outlined"
                                inputProps={{className: "button"}}
                            >Déonnexion</Button>
                        </div>
                    </div>
                  </div>
     
                  <div class="nav-bar">
                     <BottomNavBar></BottomNavBar>
                  </div>
     
             </div>
        </>
    );

//   const contact = {
//     first: "Your",
//     last: "Name",
//     avatar: "https://placekitten.com/g/200/200",
//     twitter: "your_handle",
//     notes: "Some notes",
//     favorite: true,
//   };

//   return (
//     <div id="contact">
//       <div>
//         <img
//           key={contact.avatar}
//           src={contact.avatar || null}
//         />
//       </div>

//       <div>
//         <h1>
//           {contact.first || contact.last ? (
//             <>
//               {contact.first} {contact.last}
//             </>
//           ) : (
//             <i>No Name</i>
//           )}{" "}
//           <Favorite contact={contact} />
//         </h1>

//         {contact.twitter && (
//           <p>
//             <a
//               target="_blank"
//               href={`https://twitter.com/${contact.twitter}`}
//             >
//               {contact.twitter}
//             </a>
//           </p>
//         )}

//         {contact.notes && <p>{contact.notes}</p>}

//         <div>
//           <Form action="edit">
//             <button type="submit">Edit</button>
//           </Form>
//           {/* <Form
//             method="post"
//             action="destroy"
//             onSubmit={(event) => {
//               if (
//                 !confirm(
//                   "Please confirm you want to delete this record."
//                 )
//               ) {
//                 event.preventDefault();
//               }
//             }}
//           >
//             <button type="submit">Delete</button>
//           </Form> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Favorite({ contact }) {
//   // yes, this is a `let` for later
//   let favorite = contact.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={
//           favorite
//             ? "Remove from favorites"
//             : "Add to favorites"
//         }
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
}