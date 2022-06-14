import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import styles from "./button.module.css";
import buttonImg from "../../assets/img/icon-dice.svg";

interface IButton{
    clickValue: number,
    handleClick: (params: number) => void
}


const Button: React.FC<IButton> = ({clickValue, handleClick}) => {

    const handleClickValue = () => {
        handleClick(clickValue + 1)
    }

    return (
    <div>
        <button onClick={handleClickValue} className={styles.btn}>
            <img src={buttonImg} title='img' />
        </button>
    </div>
    )
}

export default Button