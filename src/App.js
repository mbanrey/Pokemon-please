import { getPokemonList, getPokemonDescription } from "../api/utils";
import Prompt from "../components/Prompt";
import "../styles/styles.css";

async function logData() {
  const list = await getPokemonList();
  console.log(list);

  const pokemon = await getPokemonDescription();
  console.log(pokemon);
}

logData();

export default function App() {
  return <Prompt />;
}
