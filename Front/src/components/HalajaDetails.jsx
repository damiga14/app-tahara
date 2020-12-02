import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IonText } from '@ionic/react'

function HalajaDetails(props) {

    let [respuestaAPI, setRespuestaAPI] = useState([])

    let item = []

    useEffect(() => {
        axios.get(`https://app-tahara.herokuapp.com/api/v1/getAllLeyes`)
            .then((response) => { setRespuestaAPI(response.data.data) })
            .catch()
    }, [])

    for (let i in respuestaAPI) {
        if (respuestaAPI[i].id == Number(props.halajaID)) {
            item.push(respuestaAPI[i].title)
            item.push(respuestaAPI[i].mp3URL)
            item.push(respuestaAPI[i].text)
        }
    }

    return (
        <>
            <h1>{item[0]}</h1>

            <br />

            <iframe width="100%" height={166} scrolling="no" frameBorder="no" allow="autoplay" src={item[1]} /><div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}><a href="https://soundcloud.com/nils_frahm" title="Nils Frahm" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Nils Frahm</a> · <a href="https://soundcloud.com/nils_frahm/son" title="Son" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Son</a></div>

            <br />

            <IonText className='ion-text-left'>
                <div className='ion-padding' dangerouslySetInnerHTML={{ __html: item[2] }} />
            </IonText>
        </>
    )
}

export default HalajaDetails