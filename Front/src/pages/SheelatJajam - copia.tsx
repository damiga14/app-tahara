import React, { useEffect, useState } from 'react'
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonIcon, IonContent, IonGrid, IonHeader, IonImg, IonLabel, IonPage, IonRow, IonText, IonToolbar, IonItem } from '@ionic/react'
import { logoWhatsapp } from 'ionicons/icons'
import axios from 'axios'

let SheelatJajam: React.FC = () => {

    let [respuestaAPI, setRespuestaAPI] = useState({})

    let WhatsURL1: string = `https://wa.me/+525551092349`
    let WhatsURL2: string = `https://wa.me/+525551015690`
    let WhatsURL3: string = `https://wa.me/+525559895388`
    let WhatsURL4: string = `https://wa.me/+525551091947`
    let WhatsURL5: string = `https://wa.me/+525551090890`


    useEffect(() => {
        axios.get('https://swapi.dev/api/people/1')
            .then((response) => { setRespuestaAPI(response) })
            .catch((err) => { console.log(err) })
    }, [])


    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color='tertiary'>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>

                        {/* <IonTitle>App Tahara</IonTitle> */}
                    </IonToolbar>
                </IonHeader>

                <IonContent className='ion-padding' color='background'>

                    <IonText className='ion-text-center' color='light'>
                        <h1>Sheelat Jajam</h1>
                    </IonText>


                    {
                        console.log(respuestaAPI)
                    }


                    <IonGrid>
                        <br />

                        <IonItem color='transparent'>
                            <IonAvatar><IonImg src='https://adc.tutorah.tv/img/conferencistas/80.png' /></IonAvatar>
                            <IonLabel className='ion-padding'>Jajam Shlomo Tawil</IonLabel>
                        </IonItem>
                        <IonButton href={WhatsURL1} color="success" expand='block' fill='solid'><IonIcon slot='start' icon={logoWhatsapp} />55-5109-2349</IonButton>

                        <br />
                        <IonItem color='transparent'>
                            <IonAvatar><IonImg src='https://via.placeholder.com/150' /></IonAvatar>
                            <IonLabel className='ion-padding'>Jajam David Urfali</IonLabel>
                        </IonItem>
                        <IonButton href={WhatsURL2} color="success" expand='block' fill='solid'><IonIcon slot='start' icon={logoWhatsapp} />55-5101-5690</IonButton>

                        <br />
                        <IonItem color='transparent'>
                            <IonAvatar><IonImg src='https://adc.tutorah.tv/img/conferencistas/61.png' /></IonAvatar>
                            <IonLabel className='ion-padding'>Jajam Mordejai Tussie</IonLabel>
                        </IonItem>
                        <IonButton href={WhatsURL3} color="success" expand='block' fill='solid'><IonIcon slot='start' icon={logoWhatsapp} />55-5989-5388</IonButton>

                        <br />
                        <IonItem color='transparent'>
                            <IonAvatar><IonImg src='https://adc.tutorah.tv/img/conferencistas/76.png' /></IonAvatar>
                            <IonLabel className='ion-padding'>Jajam Shaul Maleh</IonLabel>
                        </IonItem>
                        <IonButton href={WhatsURL4} color="success" expand='block' fill='solid'><IonIcon slot='start' icon={logoWhatsapp} />55-5109-1947</IonButton>

                        <br />
                        <IonItem color='transparent'>
                            <IonAvatar><IonImg src='https://via.placeholder.com/150' /></IonAvatar>
                            <IonLabel className='ion-padding'>Jajam Yaacov Maleh</IonLabel>
                        </IonItem>
                        <IonButton href={WhatsURL5} color="success" expand='block' fill='solid'><IonIcon slot='start' icon={logoWhatsapp} />55-5109-0890</IonButton>
                    </IonGrid>

                    {/* 
                    <br />
                    <br />

                    <br />
                    <br />

                    <br />
                    <br />

                    <br />
                    <br />

                    <br />
                    <br /> 
                    */}

                </IonContent>
            </IonPage>
        </>
    )
}

export default SheelatJajam