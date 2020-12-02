import React, { useEffect, useState } from "react";
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonIcon, IonContent, IonGrid, IonHeader, IonImg, IonLabel, IonPage, IonText, IonToolbar, IonItem, } from "@ionic/react";
import { logoWhatsapp } from "ionicons/icons";
import axios from "axios";

function SheelatJajam() {
  let [jajamim, setJajamim] = useState([]);

  let WhatsURL = ``

  useEffect(() => {
    axios.get("https://app-tahara.herokuapp.com/api/v1/getAllJajamim")
      .then((response) => {
        setJajamim(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

        <IonContent className="ion-padding" color="background">
          <IonText className="ion-text-center" color="light">
            <p id='titulos'>Sheelat Jajam</p>
          </IonText>

          <IonGrid>

            {
              jajamim.map((item) => {
                WhatsURL = `https://wa.me/+52${item.cel}`

                return (
                  <>
                    <br />
                    <IonItem color="transparent">
                      <IonAvatar>
                        <IonImg src={item.img} />
                      </IonAvatar>
                      <IonLabel className="ion-padding">{item.name}</IonLabel>
                    </IonItem>
                    <IonButton href={WhatsURL} color="success" expand="block" fill="solid"> <IonIcon slot="start" icon={logoWhatsapp} /> {item.cel} </IonButton>
                  </>
                )
              })
            }

          </IonGrid>

        </IonContent>
      </IonPage>
    </>
  );
}

export default SheelatJajam;
