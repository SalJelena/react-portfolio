import React from 'react'
import {AiOutlineGithub} from "react-icons/ai";
import {BsGlobe} from "react-icons/bs";

const Card = ({el}) => {

    const renderedTags = (tags) => {
        return tags.map((el, index) => {
            return <span className="card__tag" key={index}>{el}</span>
        })
    }

    return (
        <button className="card">
            <div className="card__img-holder">
                <div style={{backgroundImage: "url(" + el?.img + ")"}} className="card__img">
                    <div className="card__img-layer"></div>
                </div>
            </div>
            <div className="card__text">
                <h3 className="card__title">{el.title}</h3>
                <div className="card__tags">
                    {renderedTags(el.tags)}
                </div>
                <div className="card__btns">
                    <a href={el.github} className="button button--primary card__btn" target="_blank" rel="noopener noreferrer" >
                        <AiOutlineGithub/>
                        <span className="card__btn-text">View code</span>
                    </a>
                    <a href={el.live} className="button button--primary card__btn" target="_blank" rel="noopener noreferrer">
                        <BsGlobe/>
                        <span className="card__btn-text">View live</span>
                    </a>
                </div>
            </div>
        </button>
    )
}
export default Card
