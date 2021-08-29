import MainCourse from "./MainCourse";
import Drinks from "./Drinks";
import Desserts from "./Desserts";

export default function OptionsContent() {
    return (
        <div className="conteudo">
            <h2>Primeiro, seu prato</h2>
            <MainCourse />
            <h2>Agora, sua bebida</h2>
            <Drinks />
            <h2>Por fim, sua sobremesa</h2>
            <Desserts />
        </div> 
    );
}