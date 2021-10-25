import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {useHttp} from "../Hooks/http.hook";
import {DakonList} from "../Components/DakonList";

export const DakonPage = () => {

    const [nickName, setNickName] = useState('')
    const [allNicks, setAllNicks] = useState([])
    const {request} = useHttp()
    const history = useHistory()
    useEffect(() => {
        window.M.updateTextFields()
    },[])


    const fetchNicks = useCallback(async () => {
        try {
            const fetched = await request('/api/nickname', 'GET', null)
            setAllNicks(fetched)
        } catch (e) {
        }
    }, [request])
    useEffect(() => {
        fetchNicks()
    }, [fetchNicks])




    const pressHandler = async event => {

        if (event.key === 'Enter') {
            try {
                const data = await request('/api/nickname/generate', 'POST', {nickname: nickName})
                if (data) {
                    fetchNicks()
                }
            } catch (e) {
            }
        }
    }

    return (
        <div>
            <div className="input-field" style={{color: "#fff"}}>
                <input
                    style={{color: "#fff"}}
                    placeholder="Добавить Ник"
                    type="text"
                    value={nickName}
                    onChange={e => setNickName(e.target.value)}
                    onKeyPress={pressHandler}
                />
                <label htmlFor="link">Введите кличку</label>
            </div>
            <DakonList nicks={allNicks} fetchNicks={fetchNicks}/>
        </div>
    )
}