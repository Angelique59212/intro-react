import { promotions } from "../../promotions";
import {NavLink, Outlet, useSearchParams} from "react-router-dom";

export const Promotions = function () {
    const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1>Nos promotions du moment</h1>
      <table className="promotions-table">
        <tbody>
          {promotions.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <NavLink
                    style={{ background: searchParams.get("color")}}
                    to={`/promotions/${product.id}`}
                >
                    Voir description
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <button onClick={() => setSearchParams({})}>Effacer le paramètre</button>
        <button onClick={() => setSearchParams({color: "white", background: "black"})}>Couleur blnche et background noir</button>
      <Outlet/>
    </>
  );
};
