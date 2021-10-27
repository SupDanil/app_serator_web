import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {useHttp} from "../Hooks/http.hook";
import {useMessage} from "../Hooks/message.hook";
import {AuthContext} from "../Context/AuthContext";
import {Link, useHistory} from "react-router-dom";


export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const history = useHistory();
    const [checked, setChecker] = useState(false)
    const [style, setStyle] = useState("go_next_box")
    const [platformSelect, setPlatformSelect] = useState()
    const width = window.innerWidth < 700


    const clickPlus = useCallback(async () => {
        try {
            const fetched = await request('/api/clicker', 'POST', null)
            console.log(fetched)
        } catch (e) {
        }
    }, [request])

    useEffect(() => {
        if (width) {
            setPlatformSelect("tap")
        } else {
            setPlatformSelect("click")
        }
    }, [width])


    const goToNextPage = () => {
        clickPlus()
        if (checked) {
            history.push('/create')
        }
    }

    const checkedSuccess = () => {
        if (checked) {
            setStyle("go_next_box")
        } else {
            setStyle("go_next_box shown")
        }
        setChecker(!checked)
    }

    return (
        <div className="hello_page_holder">
            {/*<img className="logo_image" src="/system_images/app_serator_logo.png"></img>*/}
            {/*<img className="poop_gif" src="/system_images/poop.gif"></img>*/}
            <div className="all_neons_holder">
                <div className="neon_holder">
                    <div className="neon"><b>w<span>e</span>l<span>c</span>o<span>me</span></b></div>
                    <div className="neon"><b>t<span>o</span></b></div>
                </div>
                <div className="neon_two"><b>APP<span>S</span><span>E</span><span>RA</span><span>TO</span><span>R</span></b>
                </div>
            </div>
            <div className="go_box">
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={checkedSuccess}
                    />
                    <span className="neon small"><b>Мне больше 18 лет</b></span>
                </label>
                <div className={style} onClick={() => {
                    goToNextPage()
                }}>
                    <div className="fa fa-apple" id="apple">💩</div>
                    <div className="text" id="twitter">{platformSelect} to start</div>
                </div>
            </div>

        </div>
    )
}