import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom';

import HalajaDetails from '../components/HalajaDetails'

interface HalajaPageProps extends RouteComponentProps<{ id: string }> { }

const HalajaPage: React.FC<HalajaPageProps> = ({ match }) => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color='tertiary'>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>
                        {/* <IonTitle>App Tahara</IonTitle> */}
                    </IonToolbar>
                </IonHeader>

                <IonContent className='ion-text-center'>

                    <HalajaDetails halajaID={match.params.id} />

                </IonContent>
            </IonPage>
        </>
    );
};

export default HalajaPage