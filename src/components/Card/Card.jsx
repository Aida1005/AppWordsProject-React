import st from './style.module.scss';
import { useEffect, useRef } from 'react';


export default function Cards (props) {
    //console.log(props);
    const {id, english, transcription, russian, translation, showTranslation} = props;
    const buttonRef = useRef ();

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    return(
        <div className={st.card}>
            <p className={st.card_id}>{id}</p>
            <h1 className={st.card_english}>{english}</h1>
            <p className={st.card_transcription}>{transcription}</p>
            {
                translation === false ? <button onClick={showTranslation}  ref ={buttonRef} className={st.card_button}  >Flip
                </button> : <p className={st.card_russian}>{russian}</p>
                }
        </div>
    )
}
