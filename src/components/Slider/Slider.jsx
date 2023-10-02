import { useEffect, useState } from "react";
import data from "../Data/Data.json";
import st from "./style.module.scss";
import Card from "../Card/Card";



export default function Slider() {
    const [translation, setTranslation] = useState (false);//состояние для отслеживания кнопки "Показать перевод"
    const [count, setCount] = useState(0);//
    const [words, setWords] = useState ([false]);//сохраняем массив данных
    const [leartCards, setLearntCards] = useState(0);//


    //Выполняется запрос к массиву 1 раз при создании компонента    
        useEffect (() => {
            setWords (data);
        }, [])

    const obj = words[count];

    //Создание функции для 
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

    function handleClickPrev (){
        let copyCount = count
        copyCount === 0 ? setCount(data.length --) : setCount(copyCount --)
        setTranslation (false)
    }

    function handleClickNext (){
        let copyCount = count
        copyCount === data.length-- ? setCount(0) : setCount(copyCount ++)
        setTranslation (false)
    }


    return (
        <div>
            <div className={st.slider}>
                <button className={st.card__btn} onClick={handleClickPrev}>Prev</button>
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
                    <div className={st.card_number}>Number of Cards leart: {leartCards}</div>
        </div>           
    )
}

