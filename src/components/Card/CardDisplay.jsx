import cards from '../Data/Data.json';
import st from "./style.module.scss";
import Card from "./Card";

export default function CardDisplay() {
    return (
        <div className={st.container}>
        {cards.map((card=>
        <div key={card.id}>
            <Card className={st.card}
                id={card.id}
                english={card.english}
                transcription={card.transcription}
                russian={card.russian} >
            </Card>
        </div>
        ))}
    </div>
    )
}