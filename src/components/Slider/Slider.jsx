import { useEffect, useState } from "react";
import data from "../Data/Data.json";
import st from "./style.module.scss";
import Card from "../Card/Card";



export default function Slider() {
    const [translation, setTranslation] = useState (false);//состояние для отслеживания кнопки "Показать перевод"
    const [count, setCount] = useState(0);//
    const [words, setWords] = useState (false);//сохраняем массив данных
    const [leartCards, setLearntCards] = useState(0);//


    //Выполняется запрос к массиву 1 раз при создании компонента    
        useEffect (() => {
            setWords (data);
        }, [])

        const obj = words[count];

        function handleClickCard (){
            setLearntCards(leartCards + 1)
}  

    //Создание функции для кнопки "Показать перевод"
        function showTranslation (){
            setTranslation(true);
            handleClickCard()
}

    if (!words){
        return <h1>Loading...</h1>
    }

    function handleClickPrev() {
        setCount((prevCount) => (prevCount === 0 ? data.length - 1 : prevCount - 1));
        setTranslation(false);
      }


    function handleClickNext() {
        setCount((prevCount) => (prevCount === data.length - 1 ? 0 : prevCount + 1));
        setTranslation(false);
      }

    return (
        <div>
            <div className={st.slider}>
                <button className={st.card__btn} onClick={handleClickPrev}>Previous</button>
                <Card className={st.card}
                english={obj.english}
                transcription={obj.transcription}
                russian={obj.russian}
                key={obj.id}
                id={obj.id}
                translation= {translation}
                showTranslation= {showTranslation}
                />
                <button className={st.card__btn} onClick={handleClickNext}>Next</button>
            </div>
                    <div className={st.card_number}>Number of cards leart: {leartCards}</div>
        </div>           
    )
}

