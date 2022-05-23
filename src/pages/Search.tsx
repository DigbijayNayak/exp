import { IonHeader, IonToolbar, IonButtons, IonTitle, IonContent } from '@ionic/react';
import React from 'react';

export const SearchPage = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start"></IonButtons>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <h2>Search page</h2>
            </IonContent>
        </>
    )
}