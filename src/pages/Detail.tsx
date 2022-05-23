import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import React from 'react';

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
                <h2>Detail</h2>
            </IonContent>
        </>
    );
}