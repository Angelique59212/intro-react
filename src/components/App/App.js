import './App.css';

// import {HelloWorld} from "./HelloWorld";
import {Header} from "../Header/Header";
import {ProductList} from "../ProductList/ProductList";
import {Fragment} from "react";
import {Sidebar} from "../Sidebar/Sidebar";

// function App() {
//   return (
//       <HelloWorld/>
//   );
// }

function App() {
    const productsList = [
        <ProductList />,
    ]
    return (
        <>
            <Header />
            <ul>
                { productsList.map((component, index) => <Fragment key={index}>{component}</Fragment> )}
            </ul>
            <Sidebar>
                <a href="https://www.google.com/">Lien google</a>
                <a href="https://www.facebook.com/">Lien facebook</a>
                <a href="https://twitter.com/?lang=fr">Lien twitter</a>
                <a href="https://fr.linkedin.com/">Lien linkedin</a>
            </Sidebar>
        </>
  );
}

export default App;
