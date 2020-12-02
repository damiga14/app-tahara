import React, { useEffect, useState } from 'react'
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from '@ionic/react'
import axios from 'axios'


function InfoTebilot() {
    let [respuestaAPI, setRespuestaAPI] = useState([])

    useEffect(() => {
        axios.get('https://app-tahara.herokuapp.com/api/v1/getAllTebilot')
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

                <IonContent className='ion-padding' color='background'>

                    <IonText className='ion-text-center' color='light'>
                        <p id='titulos'>Informacion de Tebilot</p>
                    </IonText>

                    {/* <IonText className='ion-text-center' color='success'><h2>Polanco</h2></IonText>
                    <IonItem color='background'>
                        <ul>
                            <li>
                                Edgar Allan Poe #231
                                <br />
                                Gela:56-1168-5858
                                <br />
                                Sari: 55-3635-2025
                                <br />
                                Shabat y Yom Tov
                                <br />
                                Ruthy: 55-3694-7305
                            </li>

                            <br />

                            <li>
                                Tennyson #134
                                <br />
                                Amelia: 55-5296-1506
                            </li>
                        </ul>
                    </IonItem>*/}

                    {
                        respuestaAPI.map((item) => {
                            return (
                                <>
                                    <IonText className='ion-text-center' color='success'><h2>{item.zona}</h2></IonText>
                                    <IonItem color='background'>

                                        <ul>
                                            {
                                                item.tebilot.map((item2) => {
                                                    for (let i in item2) {
                                                        return (
                                                            <>
                                                                {
                                                                    item2['active'] ?
                                                                        <>
                                                                            <IonCard color='purple'>
                                                                                <IonCardContent>
                                                                                    <IonText className='ion-margin' color='tertiary'>{item2['name']}</IonText>

                                                                                    <br />
                                                                                    {item2['address']}
                                                                                    <br />

                                                                                    {item2['contact1'] ? <>{item2['contact1']}<br /></> : null}
                                                                                    {item2['contact2'] ? <>{item2['contact2']}<br /></> : null}
                                                                                    {item2['contact3'] ? <>{item2['contact3']}<br /></> : null}
                                                                                    {item2['contact4'] ? <>{item2['contact4']}<br /></> : null}
                                                                                    {item2['contact5'] ? <>{item2['contact5']}<br /></> : null}
                                                                                    {item2['contact6'] ? <>{item2['contact6']}<br /></> : null}
                                                                                    {item2['contact7'] ? <>{item2['contact7']}<br /></> : null}
                                                                                    <br />

                                                                                </IonCardContent>
                                                                            </IonCard>
                                                                        </>
                                                                        : null
                                                                }
                                                            </>
                                                        )
                                                    }
                                                })
                                            }
                                        </ul>

                                    </IonItem>

                                </>
                            )
                        })
                    }

                </IonContent>
            </IonPage>
        </>
    )
}

export default InfoTebilot