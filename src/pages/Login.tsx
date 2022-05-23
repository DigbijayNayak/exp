import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";



export const LoginPage = ({history}:any) => {
    const goTo = (path: string) => {
        history.push(path);
    }

    return(
        <><IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/signup" />
                </IonButtons>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <form onSubmit={e => goTo('/tabs/activity')} action="post">
                <IonList>
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput type="email"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Password</IonLabel>
                        <IonInput type="password"></IonInput>
                    </IonItem>

                    <IonButton expand="block" type="submit">Log in</IonButton>
                </IonList>
            </form>

            <div>
                <a href="/signup" onClick={(e) => {e.preventDefault(); goTo('/signup')}}>Create account instead</a>
                <a href="/reset-password" onClick={(e) => {e.preventDefault(); goTo('/reset-password')}}>Forgot your password?</a>
            </div>
        </IonContent>
        </>
    );
}