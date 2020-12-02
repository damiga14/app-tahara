import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent } from '@ionic/react'

function Contacto() {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="tertiary">
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>

                        {/* <IonTitle>App Tahara</IonTitle> */}
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding ion-text-center" color="background">
                    <p id='titulos'>Contacto</p>
                </IonContent>
            </IonPage>
        </>
    )
}

export default Contacto