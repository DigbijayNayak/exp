import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonLabel } from "@ionic/react"

interface ResetPasswordPageProps {}

export const ResetPasswordPage: React.SFC<ResetPasswordPageProps> = () => {
    return (
        <IonContent>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Title</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonLabel>Reset Your Password, yo</IonLabel>
            </IonContent>
        </IonContent>
    )
}