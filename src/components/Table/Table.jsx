import data from "../Data/Data.json";
import React, {useState} from "react";
import { nanoid } from "nanoid";
import st from "./style.module.scss";

export default function Table () {

const [words, setWords] = useState(data)
const [addFormData, setAddFormData] = useState({
    english: "",
    transcription: "",
    russian: ""
})

const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute ("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
};

const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newWord = {
        id: nanoid(),
        english: addFormData.english,
        transcription: addFormData.transcription,
        russian: addFormData.russian,
    };

    const newWords = [...words, newWord];
    setWords(newWords);

};

    return(
        <div className={st.container}>
            <h1>Add a new Word</h1>
            <form className={st.form}onSubmit={handleAddFormSubmit}>
                <input className={st.input} type="text" name="english" required="required" placeholder="english" onChange={handleAddFormChange}></input>
                <input className={st.input} type="text" name="transcription" required="required" placeholder="transcription" onChange={handleAddFormChange}></input>
                <input className={st.input} type="text" name="russian" required="required" placeholder="russian" onChange={handleAddFormChange}></input>
                <button className={st.button} type="submit">Add</button>
            </form>
            <table className={st.table}>
                <thead className={st.table_thead}>
                <tr>
                <th>English</th>
                <th>Transcription</th>
                <th>Russian</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {words.map((word) => (
                    <tr key={word.id}>
                        <td>{word.english}</td>
                        <td>{word.transcription}</td>
                        <td>{word.russian}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}