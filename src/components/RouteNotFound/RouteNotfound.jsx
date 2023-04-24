import "./RouteNotFound.css";
import {useParams} from "react-router-dom";

export const RouteNotfound = function () {
    //Je récupère les paramètres de la route car je souhaite afficher la page que l'utilisateur voulait atteindre
    const params = useParams();

    return(
        <div className="route-not-found">
            {/* La route choisi par l'utilisateur étant stockée sous la propriété '*', je dois la récupérer avec le style tableau*/}
            {/* Faites un log de params pour voir ce qu'il contiznt ! */}
            Erreur, la page: <strong> {params["*"]}</strong> ,n'existe pas !
        </div>
    )
}