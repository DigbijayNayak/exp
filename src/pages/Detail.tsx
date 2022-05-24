import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonImg } from '@ionic/react';
import React from 'react';
import ActivityPage from './Activity';

export const DetailPage = ({history, match}: any) => {
    console.log('Detail for thing', match.params.thing);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton defaultHref={`/tabs/activity`}></IonBackButton>
                    </IonButtons>
                    <IonTitle>Detail</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {/* <ActivityPage /> */}
                <h2>Detail</h2>
            </IonContent>
        </>
    );
}