import React from 'react'
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonToolbar } from '@ionic/react'
import './background.css';

let PrologoYAgradecimientos: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color='tertiary'>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent className='ion-padding' color='background'>
                    <div id='background'>
                        <IonText className='ion-text-center'>
                            <p id='titulos'>Prólogo y Agradecimientos</p>
                        </IonText>

                        <IonText className='ion-text-wrap'>
                            Si analizamos la raíz de la mitzvá de pureza familiar, podemos encontrar que todo el concepto de nidá es causa del pecado de java, al hacer pecar a adam en comer del árbol prohibido. Pero al mismo tiempo que esto es un castigo para la mujer, se convierte en la fuente de bendiciones, de vida y éxito para toda la familia.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            Todos desean tener una buena vida en pareja, lo cual no es fácil lograrlo, requiere de mucho trabajo y esfuerzo de ambas partes de la pareja.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            La torá es nuestro manual de vida y con gran sabiduría nos va guiando en nuestro camino para llevar una vida digna y llena de virtudes.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            La mitzvá de taharat hamishpajá - pureza familiar, es nuestro manual para poder conseguir lo que todas la parejas buscan, es la garantía para mantener un lazo auténtico de amor, fidelidad y renovación en la pareja.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            Este proyecto nació de un sueño, que con la ayuda de Hashem, se hizo realidad.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            El objetivo de esta aplicacion es llegar a todos los hogares judíos, compartiendo la leyes de la mitzvá de  pureza familiar, donde cada mujer pueda informarse y cada vez ir mejorando en algún punto de la mitzvá.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            Mi corazón está lleno de alegría y satisfacción, gracias a ti Hashem. Gracias por estar a mi lado en cada paso que doy, porque tu eres la fuerza que nos mueve y nos impulsa. Gracias por darme las fuerzas para lograrlo y por esa chispa de inspiración que me motivó para hacer tikun olam.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            Quiero agradecer a Jajam Shlomo Tawil y Jajam David Urfali, por toda su ayuda e impulso para poder lograrlo.
                            </IonText>
                        <br />
                        <IonText className='ion-text-wrap'>
                            A David Amiga por su tiempo y trabajo para lograr crear esta aplicación, gracias por hacer este proyecto un logro mutuo.
                            </IonText>
                        <br />
                        <IonText className='ion-text-wrap'>
                            A ti querida Lety Maleh, eres esa guía que ha estado conmigo desde mi juventud, mucho de lo que he aprendido es gracias a ti. Gracias por tu apoyo y ayuda en que la información este con la hashkafa correcta. Le doy gracias a Hashem por ponerte en mi camino, eres un ejemplo y te admiro mucho.
                            </IonText>
                        <br />
                        <IonText className='ion-text-wrap'>
                            A mi querido esposo Elie y a mis hijos Bella, Isaac, Denny, David y Gabriel. Gracias por su ayuda, por regalarme de su tiempo para que yo pueda trabajar en este proyecto, por involucrarse en esto como si fuera suyo, sin su apoyo esto no hubiera sido posible.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            A ustedes mujeres virtuosas que dejaron huella en mi vida, que sus enseñanzas y cualidades han sido ejemplo en mi y en toda nuestra familia.
                            </IonText>
                        <br />
                        <IonText className='ion-text-wrap'>
                            Rosy bat Margarita z”l
                            </IonText>
                        <br />
                        <IonText className='ion-text-wrap'>
                            Habibe bat Altun z”l
                            </IonText>
                        <br />
                        <IonText className='ion-text-wrap'>
                            Alicia bat Badia z”l
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            Que todo el aprendizaje que se logre con esta aplicación sea leiluy nishmat de todas ustedes, que su alma este muy cerca de Hashem y gocen de los frutos que dio su cosecha.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            Le pido a Hashem que por el mérito de todas la mujeres que aprendan de esta aplicación, haga que la shejina (luz divina) pose en todas las casa de Am Israel, colmandonos de puras bendiciones, amor, unión, logros, hijos buenos, satisfacciones, entre muchas cosas más.
                        </IonText>
                        <br />
                        <br />
                        <IonText className='ion-text-wrap'>
                            Vivi amiga de cabazo
                    </IonText>
                    </div>
                </IonContent>

            </IonPage>
        </>
    )
}

export default PrologoYAgradecimientos