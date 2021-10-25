import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../Hooks/http.hook";
import {AuthContext} from "../Context/AuthContext";
import {useHistory} from 'react-router-dom'


export const CreatePage = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const size = window.innerWidth < 700

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            history.push(`/detail/${name}`);
        }
    }

    const goNext = () => {
        history.push(`/detail/${name}`);
    }

    const returnShit = () => {
        if(name.length > 3){
            return(
                <div className="go_next_box shown" onClick={() => {
                    goNext()
                }}>
                    <div className="fa fa-apple" id="apple">💩</div>
                    <div className="text" id="twitter">
                        tap to get a nickname</div>
                </div>
            )
        }
        else{
           return <div className="default_shit" id="apple">💩</div>
        }


    }

    return (
        <div className="create_page">
            <div className="neon_two"><b>APP<span>S</span><span>E</span><span>RA</span><span>TO</span><span>R</span></b>
            </div>
            <div className="neon small two"><b><span>введите</span>&nbsp;<span>имя</span></b></div>
            <div className="light">
                <div className="input-field" style={{color: "#fff"}}>
                    <input
                        style={{color: "#fff"}}
                        placeholder="Введите имя"
                        id="link"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    {/*<label htmlFor="link">Введите имя</label>*/}
                </div>
                <div className="ahtung_text" id="twitter">
                    <div style={{color: "red"}}>ATTENTION!!!</div>
                    APPSERATOR <br/>
                    был создан ради развлечения и не
                    несёт своей целью кого-то оскорбить.<br/>
                    С помощью нашего приложения вы
                    сможете придумывать смешные<br/>
                    прозвища для себя и своих друзей.<br/>
                    <div>HAVE FUN!!!</div>
                    {size ? returnShit()
                        : false}
                </div>



            </div>
        </div>
    )
}