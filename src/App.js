import React from "react"
import Dishes from "./Dishes"
import Drinks from "./Drinks"
import Desserts from "./Desserts"
import TopBar from "./TopBar"
import Request from "./Request"
import { drinks } from "./Arrays"
import { dishes } from "./Arrays"
import { desserts } from "./Arrays"


export default function App () {
    const [ativado, setAtivado] = React.useState("desativado");
    const [mensagem, setMensagem] = React.useState("Selecione os 3 itens para fechar o pedido")
    const [escondido, setEscondido] = React.useState("");
    const [esconderEsconderPedido, setEsconderPedido] = React.useState("none");

    function ativar () {
        const dishesQtd = (!dishes.filter((dishe) => dishe.qtd !== 0).length === false);
        const drinksQtd = (!drinks.filter((drink) => drink.qtd !== 0).length === false);
        const dessertsQtd = (!desserts.filter((dessert) => dessert.qtd !== 0).length === false);

        if(dishesQtd && drinksQtd && dessertsQtd){
            setAtivado("ativar");
            setMensagem("Fechar pedido");
        }
        else{
            setAtivado("desativado");
            setMensagem("Selecione os 3 itens para fechar o pedido");
        }
    }
    function esconder () {
        if(esconderEsconderPedido === "none"){
            setEscondido("none");
            setEsconderPedido("");
        }
        else{
            setEscondido("");
            setEsconderPedido("none");
        }
    }
    return (
        <div>
            <TopBar />
            <div className={`conteudo ${escondido}`}>
                <p className="secao">Primeiro, seu prato</p>
                <Dishes  dishes={dishes} ativar={ativar}/>
                <p className="secao">Agora, sua bebida</p>
                <Drinks drinks={drinks} ativar={ativar}/>
                <p className="secao">Por fim, sua sobremessa</p>
                <Desserts desserts={desserts} ativar={ativar}/>
            </div>
                    <div className={`barra-fim-fixa ${escondido}`}>
                            <div className={`texto ${ativado}`} onClick={()=>EnviarPedido({esconder})}>
                                <p className="descricao">{mensagem}</p>
                            </div>
                    </div>
                    <Request esconder={esconder} dishes={dishes} drinks={drinks} desserts={desserts} total={total} esconderEsconderPedido={esconderEsconderPedido}/> 
            </div>
    )
}

function EnviarPedido ({esconder}) {
    esconder();
}

function total () {
    const dishesValue = dishes.reduce((total, dishe) => (total + (dishe.preco.replaceAll(',','.') * dishe.qtd)), 0);
    const drinksValue = drinks.reduce((total, drink) => (total + (drink.preco.replaceAll(',','.') * drink.qtd)), 0);
    const dessertsValue = desserts.reduce((total, dessert) => (total + (dessert.preco.replaceAll(',','.') * dessert.qtd)), 0);

    return (dishesValue + drinksValue + dessertsValue).toFixed(2).replaceAll('.',',');
}
