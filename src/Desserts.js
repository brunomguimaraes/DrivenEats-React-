const dessertOptions = [
    {
        dessertImage: "assets/img/pudim.png",
        dessertName: "Pudim",
        dessertInfo: "Um pouco de batata,",
        dessertPrice: "R$ 15,90"
    },
    {
        dessertImage: "assets/img/bolo_de_chocolate.jpg",
        dessertName: "Bolo de Chocolate",
        dessertInfo: "Um pouco de batata,",
        dessertPrice: "R$ 15,90"
    },
    {
        dessertImage: "assets/img/creme_de_cupuacu.jpeg",
        dessertName: "Creme de Cupuaçu",
        dessertInfo: "Um pouco de batata,",
        dessertPrice: "R$ 15,90"
    },
    {
        dessertImage: "assets/img/salada_de_frutas.jpg",
        dessertName: "Salada de Frutas",
        dessertInfo: "Um pouco de batata,",
        dessertPrice: "R$ 15,90"
    },
    {
        dessertImage: "assets/img/cremoso.jpg",
        dessertName: "Açaí Cremoso",
        dessertInfo: "Um pouco de batata,",
        dessertPrice: "R$ 15,90"
    },
    {
        dessertImage: "assets/img/bolo_de_coco.jpeg",
        dessertName: "Bolo de Coco",
        dessertInfo: "Um pouco de batata,",
        dessertPrice: "R$ 15,90"
    },

]


export default function Desserts() {
    return (
        <div className="desserts">
            {dessertOptions.map((dessert, index) => (<Dessert key={index} dessertImage = {dessert.dessertImage} dessertName = {dessert.dessertName} dessertInfo = {dessert.dessertInfo} dessertPrice = {dessert.dessertPrice} />))}
        </div>
    );
}


function Dessert(props) {
    const {
        dessertImage,
        dessertName,
        dessertInfo,
        dessertPrice
    } = props;

    return (
        <div> 
            <img src={dessertImage} alt="Pudim" />
            <div className="informacao-opcao"> 
                <h3 className="nome-da-opcao">{dessertName}</h3>
                <p className="descricao-opcao">{dessertInfo}</p>
                <p className="valor">{dessertPrice}</p>
                <div className="check">
                    <ion-icon name="checkmark-circle-sharp"></ion-icon>
                </div>                
            </div>
        </div>
    );
}