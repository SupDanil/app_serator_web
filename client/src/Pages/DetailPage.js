import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {useHttp} from "../Hooks/http.hook";
import {AuthContext} from "../Context/AuthContext";
import {Loader} from "../Components/Loader";

export const DetailPage = () => {
    const {request} = useHttp();
    const [nicks, setSetNicks] = useState([])
    const [nick, setNick] = useState('')
    const [max, setMax] = useState(nicks.length)
    const linkId = useParams().id
    const [random, setRandom] = useState(0)
    const [loading, setLoading] = useState(0)
    const history = useHistory();

    useEffect(() => {
        setMax(nicks.length)
    }, [nicks])

    useEffect(() => {
        if (typeof nicks[random] !== "undefined") {
            setNick(nicks[random].nickname, () => console.log(nick))
        }
    }, [max, random])


    useEffect(() => {
        setRandom((prev) => {
            if (prev !== random) {
            }
            setRandom(randomInteger(0, max))
        })
    }, [random, max])


    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand)

    }

    const fetchNicks = useCallback(async () => {
        try {
            const fetched = await request('/api/nickname', 'GET', null)
            if (fetched) {
                setLoading(true)
            }
            setSetNicks(fetched.nicks)
        } catch (e) {
        }
    }, [request])

    const clickPlus = useCallback(async () => {
        try {
            const fetched = await request('/api/clicker', 'POST', null)
        } catch (e) {
        }
    }, [request])


    useEffect(() => {
        fetchNicks()
    }, [fetchNicks])


    if (!loading) {
        return <Loader/>
    }



    const goPrev = () => {
        clickPlus()
        history.push('/create')
    }

    if (typeof nick !== "undefined") {
        return (
            <div className="final_container">
                <div className="neon_two"><b>APP<span>S</span><span>E</span><span>RA</span><span>TO</span><span>R</span></b>
                </div>
                <div className="final_box">
                    <div className="final_name" id="twitter">{linkId}<br/></div>
                    <div className="neon_two"><b><span className="final_nick"> {nick}</span></b></div>
                </div>
                <div style={window.innerWidth< 700 ? {marginTop: "70px"} : {marginTop: "-20px"}} className="go_next_box shown" onClick={() => {
                    goPrev()
                }}>
                    <div className="fa fa-apple" id="apple">💩</div>
                    <div className="text" id="twitter">one more time</div>
                </div>
            </div>

        )
    } else {
        return <Loader/>
    }

}