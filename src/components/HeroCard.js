import React from "react";
import "./HeroCard.css"
import MyButton from "./Button";

export default function HeroCard({name}) {
    return (
        <div className="herocard">
            <div>
                <h1>{name}</h1>
                <div className="box">
                    <div>
                        <li>
                            <MyButton name={'shield'}/>
                        </li>
                        <li>hand</li>
                    </div>
                    <div>
                        <li>hand</li>
                        <li>torso</li>
                    </div>
                </div>
            </div>
        </div>
    )
}
