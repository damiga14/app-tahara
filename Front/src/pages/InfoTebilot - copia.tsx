import React from 'react'
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'

// https://app-tahara.herokuapp.com/api/v1/getAllTebilot

let InfoTebilot: React.FC = () => {
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
                        <h1>Informacion de Tebilot</h1>
                    </IonText>


                    <IonText className='ion-text-center' color='success'><h2>Polanco</h2></IonText>
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
                    </IonItem>

                    <IonText className='ion-text-center' color='success'><h2>Tecamachalco</h2></IonText>
                    <IonItem color='background'>
                        <ul>
                            <li>
                                Fasja
                                <br />
                                Fuente de Templanza #13
                                <br />
                                Nancy: 55-3010-8296
                                <br />
                                Shabat y Yom Tov
                                <br />
                                Susy: 55-2203-0922
                            </li>

                            <br />

                            <li>
                                Vertientes
                                <br />
                                Sierra Guadarrama #90
                                <br />
                                Rachel: 55-3020-0086
                            </li>

                            <br />

                            <li>
                                Shaaré Shalóm
                                <br />
                                Apolo #20
                                <br />
                                Shuly: 55-2490-9068
                                <br />
                                Shabat y Yom Tov
                                <br />
                                Sari: 56-1865-3830
                            </li>

                            <br />

                            <li>
                                Fuente de la Huerta #8
                                <br />
                                Concha: 55-2665-5880

                                Centro Sefaradí
                                <br />
                                Av. de los bosques #292
                                <br />
                                Berta: 5552169116
                            </li>

                            <br />

                            <li>
                                Ramat Shalóm
                                <br />
                                Fuente de pescador #35
                                <br />
                                Miriam: 55-6317-2627
                            </li>

                        </ul>
                    </IonItem>

                    <IonText className='ion-text-center' color='success'><h2>Interlomas</h2></IonText>
                    <IonItem color='background'>
                        <ul>
                            <li>
                                Shaaré Tziyón
                                <br />
                                Pasaje interlomas #5
                                <br />
                                Rosy: 55-1470-8064
                            </li>

                            <br />

                            <li>
                                Residencial Toledo
                                <br />
                                Av. Jesus del Monte #45
                                <br />
                                Alicia: 55-3033-41-60
                            </li>

                            <br />

                            <li>
                                Tebilá Hacienda Del
                                <br />
                                Ciervo #24ª
                                <br />
                                Alegra: 5519590742
                                <br />
                                Elena: 55-5103-6555
                            </li>
                        </ul>
                    </IonItem>

                    <IonText className='ion-text-center' color='success'><h2> </h2></IonText>
                    <IonItem color='background'>
                        <ul>
                            <li>
                                
                            </li>

                            <br />

                            <li>
                                
                            </li>
                        </ul>
                    </IonItem>



                </IonContent>
            </IonPage>
        </>
    )
}

export default InfoTebilot