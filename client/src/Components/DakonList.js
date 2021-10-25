import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from "../Hooks/http.hook";

export const DakonList = ({nicks,fetchNicks}) => {

    const {request} = useHttp()
    const [id, setId] = useState('')

    const deleteOne = useCallback(async (ID) => {
        try {
            const fetched = await request(`/delete/${ID}`, 'GET', null)
            if(fetched){
                fetchNicks()
            }
        } catch (e) {
        }
    }, [request])

    if (!nicks.length) {
        return <p className="center">Ников пока нет</p>
    }




    return (
        <table>
            <thead style={{color:"#fff"}}>
            <tr>
                <th>Ники</th>
            </tr>
            </thead>

            <tbody style={{color:"#fff"}}>
            {nicks.map((nick, index) => {
                return (
                    <tr key={nick._id}>
                        <td>{nick.nickname}</td>
                        <td onClick={()=> deleteOne(nick._id)}>Удалить</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}