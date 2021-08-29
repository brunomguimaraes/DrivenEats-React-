import React from "react";
const drinkOptions = [
    {
        drinkImage: "assets/img/coca.png",
        drinkName: "Coquinha Gelada",
        drinkInfo: "Lata 350ml",
        drinkPrice: "R$ 4,90"
    },
    {
        drinkImage: "assets/img/bare.jpeg",
        drinkName: "Barezinho",
        drinkInfo: "Lata 350ml",
        drinkPrice: "R$ 3,36"
    },
    {
        drinkImage: "assets/img/fanta.jpg",
        drinkName: "Fanta",
        drinkInfo: "Lata 350ml",
        drinkPrice: "R$ 3,59"
    },
    {
        drinkImage: "assets/img/suco_morango.jpeg",
        drinkName: "Suco de Morango",
        drinkInfo: "Copo 500ml",
        drinkPrice: "R$ 8,00"
    },
    {
        drinkImage: "assets/img/suco_abacaxi.jpg",
        drinkName: "Suco de Abacaxi",
        drinkInfo: "Copo 500ml",
        drinkPrice: "R$ 7,70"
    },
    {
        drinkImage: "assets/img/suco-de-laranja.jpg",
        drinkName: "Suco de Laranja",
        drinkInfo: "Copo 500ml",
        drinkPrice: "R$ 7,50"
    }
];


export default function Drinks() {
    return (
        <div className="drinks">
            {drinkOptions.map((drink, index) => (<Drink key={index} drinkImage = {drink.drinkImage} drinkName = {drink.drinkName} drinkInfo = {drink.drinkInfo} drinkPrice = {drink.drinkPrice}/>))}
        </div>
    );
}

function Drink(props) {
    const {
        drinkImage, 
        drinkName, 
        drinkInfo,  
        drinkPrice
    } = props;

    const [selected , setSelected ] = React.useState("");
    const [count, setCount] = React.useState(0);


    function select() {
        if (selected  === "") {
            setSelected ("selected");
            add();
         
        } 
    }

    function add() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
        if (count === 1) {
            setSelected ("");
        }
    }


    return (
        <div className={`${selected}`} onClick={select}>
            <img src={drinkImage} alt="Latas de Coca-Cola" />
            <div className="informacao-opcao">
                <h3 className="nome-da-opcao">{drinkName}</h3>
                <p className="descricao-opcao">{drinkInfo}</p>
                <p className="valor">{drinkPrice}</p>
                <div className="check">
                    <div className="decrement">
                        <ion-icon name="remove" onClick={decrement}></ion-icon>
                    </div>                    
                    <div>
                        {count}
                    </div>
                    <div className="add">
                        <ion-icon name="add" onClick={add}></ion-icon>
                    </div>
                </div>        
            </div>                
        </div>
    );
}
