
const mainCourseOptions = [
    {
        mainCourseImage: "assets/img/frango.png",
        mainCourseName: "Frango Yin Yang",
        mainCourseInfo1: "Um pouco de batata,",
        mainCourseInfo2: "um pouco de salada",
        mainCoursePrice: "R$ 15,90"
    },
    {
        mainCourseImage: "assets/img/bife-acebolado.jpg",
        mainCourseName: "Bife Acebolado",
        mainCourseInfo1: "Com arroz, salada e",
        mainCourseInfo2: "um pouco de fritas",
        mainCoursePrice: "R$ 20,89"     
    },
    {
        mainCourseImage: "assets/img/peixe-assado.jpg",
        mainCourseName: "Peixe Assado",
        mainCourseInfo1: "Tambaqui com um",
        mainCourseInfo2: "recheio de farofa",
        mainCoursePrice: "R$ 39,90"     
    },
    {
        mainCourseImage: "assets/img/salpicao.jpg",
        mainCourseName: "Salpicão",
        mainCourseInfo1: "Salpicão tradicional,",
        mainCourseInfo2: "feito com frango",
        mainCoursePrice: "R$ 18,00"     
    },
    {
        mainCourseImage: "assets/img/lasanha-de-berinjela.jpg",
        mainCourseName: "Lasanha",
        mainCourseInfo1: "Feita com berinjela e",
        mainCourseInfo2: "abobrinha",
        mainCoursePrice: "R$ 18,85"     
    },
    {
        mainCourseImage: "assets/img/escondidinho.png",
        mainCourseName: "Escondidinho",
        mainCourseInfo1: "Com soja, legumes e",
        mainCourseInfo2: "um pouco de arroz",
        mainCoursePrice: "R$ 23,00"     
    }
]




export default function MainCourse () {
    return (
        <div className="main-course">
            {mainCourseOptions.map((option, index) => (<Dish key={index} mainCourseImage = {option.mainCourseImage} mainCourseName = {option.mainCourseName} mainCourseInfo1 = {option.mainCourseInfo1} mainCourseInfo2 = {option.mainCourseInfo2} mainCoursePrice = {option.mainCoursePrice} />))}
        </div>
    );
}



function Dish(props) {
    const {
        mainCourseImage, 
        mainCourseName, 
        mainCourseInfo1, 
        mainCourseInfo2, 
        mainCoursePrice
    } = props;


    return (
        <div>
            <img src={mainCourseImage} alt="Prato de Frango Yin Yang" />
            <div className="informacao-opcao">
                <h3 className="nome-da-opcao">{mainCourseName}</h3>
                <p className="descricao-opcao">{mainCourseInfo1}<br/>{mainCourseInfo2}</p>
                <p className="valor">{mainCoursePrice}</p>
                <div className="check">
                    <ion-icon name="checkmark-circle-sharp"></ion-icon>
                </div>   
            </div>
        </div>
    );
}