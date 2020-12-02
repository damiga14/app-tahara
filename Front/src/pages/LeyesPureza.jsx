import React, { useEffect, useState } from 'react'
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonToolbar } from '@ionic/react';
import axios from 'axios'
import './LeyesPureza.css'

function LeyesPureza() {
    let [respuestaAPI, setRespuestaAPI] = useState([])

    useEffect(() => {
        axios.get('https://app-tahara.herokuapp.com/api/v1/getAllLeyes')
            .then((response) => { setRespuestaAPI(response.data.data); })
            .catch((err) => { console.log(err); });
    }, [])

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color='tertiary'>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref='/'></IonBackButton>
                        </IonButtons>

                        {/* <IonTitle>App Tahara</IonTitle> */}
                    </IonToolbar>
                </IonHeader>

                {/* <div id='content'> */}
                <IonContent>
                    <IonList>

                        {
                            respuestaAPI.map((item, index) => {
                                return <IonItem routerLink={`/halajapage/${index + 1}`}>{item.title}</IonItem>
                            })
                        }

                    </IonList>
                </IonContent>
                {/* </div> */}
            </IonPage>
        </>
    )
}

export default LeyesPureza
