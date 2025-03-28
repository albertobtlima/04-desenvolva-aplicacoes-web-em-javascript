import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 7);
const magoJulia = new Mago("Julia", 8, "gelo", 7, 10);

const personagens = [magoAntonio, magoJulia];

new PersonagemView(personagens).render();
