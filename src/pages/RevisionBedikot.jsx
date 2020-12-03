import React, { useEffect, useState } from 'react'
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonText, IonToolbar, IonItem } from '@ionic/react'
import axios from 'axios'

function RevisionBedikot() {
    let [respuestaAPIH, setRespuestaAPIH] = useState([])
    let [respuestaAPIM, setRespuestaAPIM] = useState([])

    useEffect(() => {
        axios.get('https://app-tahara.herokuapp.com/api/v1/getAllBodkim')
            .then((response) => { setRespuestaAPIH(response.data.data); })
            .catch((err) => { console.log(err); });

        axios.get('https://app-tahara.herokuapp.com/api/v1/getAllBodkot')
            .then((response) => { setRespuestaAPIM(response.data.data); })
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
                        <p id='titulos'>Revision de Bedikot</p>
                    </IonText>

                    <IonText className='ion-text-center' color='tertiary'><h2>Bodkim</h2></IonText>
                    {
                        respuestaAPIH.map((item) => {
                            return (
                                <>
                                    <IonText className='ion-text-center' color='success'><h6>{item.zona}</h6></IonText>
                                    <IonCard>
                                        <IonCardContent>
                                            {
                                                item.people.map((item2) => {
                                                    return (
                                                        <>
                                                            {item2.name}: {item2.cel}
                                                            <br />
                                                        </>
                                                    )
                                                })
                                            }
                                        </IonCardContent>
                                    </IonCard>
                                </>
                            )
                        })
                    }

                    <IonItem color='transparent'></IonItem>

                    <IonText className='ion-text-center' color='tertiary'><h2>Bodkot</h2></IonText>
                    {
                        respuestaAPIM.map((item) => {
                            return (
                                <>
                                    <IonText className='ion-text-center' color='success'><h6>{item.zona}</h6></IonText>
                                    <IonCard>
                                        <IonCardContent>
                                            {
                                                item.people.map((item2) => {
                                                    return (
                                                        <>
                                                            {item2.name}: {item2.cel}
                                                            <br />
                                                        </>
                                                    )
                                                })
                                            }
                                        </IonCardContent>
                                    </IonCard>
                                </>
                            )
                        })
                    }



                </IonContent>
            </IonPage>
        </>
    )
}

export default RevisionBedikot