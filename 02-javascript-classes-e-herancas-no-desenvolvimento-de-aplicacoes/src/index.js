import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 7);
const magoJulia = new Mago("Julia", 8, "gelo", 7, 10);
const arqueiroBruno = new Arqueiro("Bruno", 7, 8);
const arqueiroMagoChico = new ArqueiroMago("Chico", 7, 10, "ar", 4, 8);

const personagens = [magoAntonio, magoJulia, arqueiroBruno, arqueiroMagoChico];

new PersonagemView(personagens).render();
