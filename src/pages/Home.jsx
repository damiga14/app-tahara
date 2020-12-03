import React, { useEffect, useState } from 'react';
import { IonCard, IonCardContent, IonPopover, IonInput, IonItem, IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import { Plugins } from '@capacitor/core'
import './Home.css';
import axios from 'axios'
import validator from 'email-validator'
const { Storage } = Plugins;


function Home() {
  let [firstUse, setFirstUse] = useState(false)
  let [showPopover, setShowPopover] = useState(true);
  let [email, setEmail] = useState('')

  async function setItem() {
    await Storage.set({
      key: 'name',
      value: 'Max'
    });
  }

  async function getItem() {
    const { value } = await Storage.get({ key: 'name' });

    if (value) {
      console.log('No primer uso', value);
    }
    else {
      console.log('Primer uso');
      setFirstUse(true)
      setItem()
    }
  }

  async function removeItem() {
    await Storage.remove({ key: 'name' });
  }

  function sendMail(mail) {
    if (validator.validate(mail)) {
      console.log('bueno')
      let data = {
        email: email
      }

      axios.post('https://app-tahara.herokuapp.com/api/v1/insertEmail', data)
    }
  }

  useEffect(() => {
    getItem()
    // removeItem()
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='tertiary'>
          <IonTitle>iTebila</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color='background'>

        <div id='content'>

          <IonButton onClick={removeItem}>borrar</IonButton>

          {
            firstUse ?
              <>
                <IonContent>
                  <IonPopover isOpen={showPopover} cssClass='my-custom-class' onDidDismiss={e => setShowPopover(false)} backdrop-dismiss='true'>

                    <div id='content2'>

                      Muchas gracias por utilizar nuestra aplicacion. <br /> <br />
                  Por favor introduce tu correo electronico para continuar
                    </div>

                    <IonItem>
                      <IonInput placeholder='Email' value={email} onIonChange={(e) => { setEmail(e.detail.value) }}></IonInput>
                    </IonItem>

                    <IonButton expand='block' color='tertiary' onClick={() => {
                      sendMail(email)
                      setShowPopover(false)
                    }}>Continuar</IonButton>

                  </IonPopover>
                </IonContent>
              </>
              : null
          }

          <IonCard color='transparent'>
            <IonCardContent>
              <img src="https://via.placeholder.com/100'" alt="" />
              {/* <IonImg src='https://via.placeholder.com/100' /> */}
              <div id='textOnimg'>
                <h2 id='logo'>Logo</h2>
              </div>
            </IonCardContent>
          </IonCard>

          <table>
            <tbody>
              <tr>
                <td>
                  <IonCard color='purple' button routerLink='/prologoyagradecimientos'>
                    <IonImg src='https://i.ibb.co/f0ZJc9N/prologo.jpg' />
                    <p id='chico'>Prólogo y Agradecimientos</p>
                  </IonCard>
                </td>
                <td>
                  <IonCard color='purple' button routerLink='/diccionario'>
                    <IonImg src='https://i.ibb.co/MDH0RWJ/diccionario.png' />
                    <p>Diccionario</p>
                  </IonCard>
                </td>
              </tr>
              <tr>
                <td>
                  <IonCard color='purple' button routerLink='/sheelatjajam'>
                    <IonImg src='https://i.ibb.co/Tmy9PKx/sheelat-JAjam.jpg' />
                    <p>Sheelat Jajam</p>
                  </IonCard>
                </td>
                <td>
                  <IonCard color='purple' button routerLink='/revisionbedikot'>
                    <IonImg src='https://i.ibb.co/HCGR0dv/revision-Bedikot.jpg' />
                    <p>Revision Bedikot</p>
                  </IonCard>
                </td>
              </tr>
              <tr>
                <td>
                  <IonCard color='purple' button routerLink='/infotebilot'>
                    <IonImg src='https://i.ibb.co/zhtH0g4/info-Tebilot.jpg' />
                    <p>Info de Tebilot</p>
                  </IonCard>
                </td>
                <td>
                  <IonCard color='purple' button disabled>
                    <IonImg src='https://i.ibb.co/d7MvhVP/calendario.jpg' />
                    <p>Calendario</p>
                  </IonCard>
                </td>
              </tr>
              <tr>
                <td>
                  <IonCard color='purple' button routerLink='/haskamot'>
                    <IonImg src='https://picsum.photos/290/174' />
                    <p>Haskamot</p>
                  </IonCard>
                </td>
                <td>
                  <IonCard color='purple' button routerLink='/leyespureza'>
                    <IonImg src='https://i.ibb.co/qWP9vmz/leyes-Pureza.jpg' />
                    <p id='chico'>Leyes de Pureza familiar</p>
                  </IonCard>
                </td>
              </tr>
              <tr>
                <td>
                  <IonCard color='purple' button routerLink='/contacto'>
                    <IonImg src='https://i.ibb.co/6r72Jrv/contacto.png' />
                    <p>Contacto</p>
                  </IonCard>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
