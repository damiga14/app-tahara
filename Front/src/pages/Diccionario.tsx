import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonToolbar } from '@ionic/react'
import React from 'react'

let Diccionario: React.FC = () => {
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

                <IonContent className='ion-padding' color='background'>
                    <div id='background'>
                        <IonText className='ion-text-center'>
                            <p id='titulos'>Diccionario</p>
                        </IonText>

                        <ul>
                            <li>Arjakot: Comportamiento De La Mujer en Estado De Nidá</li>
                            <li>Asher Yatzar: Bendición Que Se Dice Después De Hacer Sus Necesidades</li>
                            <li>Balanit: Encargada De Revisar a Las Mujeres en El Momento De La Sumersiones en La Tebilá</li>
                            <li>Bedikot: Revisiones Interna De La Vagina</li>
                            <li>Bema Litlot: a Que Podemos Adjudicar La Mancha</li>
                            <li>Ben Hashemashot: 13 Minutos Después De La Puesta Del Sol</li>
                            <li>Beraja O Berajot: Bendición</li>
                            <li>Brit Kodesh: Pene</li>
                            <li>Ereb Shabat: Víspera De Shabat</li>
                            <li>Erub: Rodear Una Zona, Para Poder Cargar en Shabat</li>
                            <li>Goy: Gentil</li>
                            <li>Gueniza:</li>
                            <li>Halaja O Halajot: Leyes</li>
                            <li>Hargashá: Sentimiento Interno De La Apertura De La Matriz</li>
                            <li>Hatarat Nedarim: Anular Las Promesas</li>
                            <li>Hefsek: Revisión Interna De La Vagina, Para Confirmar Que Ya Está Limpia De Cualquier Fluido De Sangre</li>
                            <li>Heker: Objeto Que Indique a La Pareja, Que Está en Estado De Nidá</li>
                            <li>Iyun Vekol Haguf: Revisión Minuciosa De Todas Las Partes Del Cuerpo</li>
                            <li>Jafifa: Preparación Del Cuerpo Para Entrar en La Tebilá (Tomar Un Baño)</li>
                            <li>Jajamim: Rabinos</li>
                            <li>Jatzitza: Algo Que Impida El Contacto Directo Del Agua De La Tebilá Con El Cuerpo</li>
                            <li>Jazaka: Cuando Se Hacen Las Cosas 3 Veces</li>
                            <li>Jizuk: Prender Velas De Shabat 12 Minutos Antes Del Horario De Prendida De Velas</li>
                            <li>Jumbra: Cuidarse Más De La Ley</li>
                            <li>Kasher: Permitida</li>
                            <li>Kedusha: Pureza</li>
                            <li>Kegris: Medida De 19 Mm</li>
                            <li>Keriat Shema: Bendición Antes De Dormir</li>
                            <li>Ketem: Mancha</li>
                            <li>Kinuaj: Limpieza Profunda</li>
                            <li>Lo Mekabel Tumá: No Recibe Impureza</li>
                            <li>Maim Mekadmim: Aguas Previas a La Tebilá</li>
                            <li>Majloket: Discusión Entre Los Rabinos</li>
                            <li>Mekabel Tumá: Si Recibe Impureza</li>
                            <li>Mezuza: Pergamino Que Se Pone en Los Marcos De Las Puertas</li>
                            <li>Mitzvá: Precepto</li>
                            <li>Motzae Shabat: Terminación De Shabat</li>
                            <li>Netilat Yadaim: Lavado De Manos</li>
                            <li>Nidá: Estado De La Mujer Cuando Emana Sangre De La Matriz</li>
                            <li>Noy: Conceptos De Belleza</li>
                            <li>Ona: Segmento De Tiempo, 12 Horas</li>
                            <li>Shebá Nekiyim: 7 Dias Limpios</li>
                            <li>Sheelat Jajam: Preguntar a Una Autoridad Rabinica</li>
                            <li>Shekia: Puesta Del Sol</li>
                            <li>Taharat Hamishpajá: Pureza Familiar</li>
                            <li>Tashmish: Relaciones Sexuales</li>
                            <li>Tebilá: Baño Ritual Judio</li>
                            <li>Tzeniut: Recato</li>
                            <li>Yom Tov: Festividad Judia</li>
                            <li>Zera Levatala: Semen Derramado Fuera De La Mujer</li>
                        </ul>
                    </div>

                </IonContent>
            </IonPage>
        </>
    )
}

export default Diccionario