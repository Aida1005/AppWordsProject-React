import st from "./style.module.scss";
import React from "react";
import image from "../../Images/Error1.svg";

export default function NotFoundPage() {

    return (
        <div className={st.container}>
            <img className={st.img} src={image} alt='error'></img>
            <p className={st.text}>Sorry, page not found</p>
            <button className={st.button}>Back to Home</button>
        </div>
    )
}