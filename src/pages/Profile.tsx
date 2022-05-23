import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonContent } from "@ionic/react"

export const ProfilePage = () =>{
    return (
        <>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start"></IonButtons>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <h2>Profile Page</h2>
            </IonContent>
        </>
    );
};