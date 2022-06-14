import React, { useEffect, useState } from 'react';
import styles from "./card.module.css";
import {IAdvice} from "../../App";
import divider from "../../assets/img/pattern-divider-desktop.svg"


interface ICard {
    advice: IAdvice
}


const Card: React.FC<ICard> = ({advice}) => {

    return (
        <div className={styles.advice__container}>
            <h2 className={styles.advice}>ADVICE #{advice.id}</h2>
            <h2 className={styles.text}>"{advice.text}"</h2>
            <img src={divider} alt="dividerImg" className={styles.cardImg}/>
        </div>
    )
}

export default Card