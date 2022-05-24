import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";
import { getMaxListeners } from 'process';



export const LoginPage = ({history}:any) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    // const [userid, setUserid] = useState();
    // const [password, setPassword] = useState();
    const usid = 'sunil@gmail.com';
    const passwd = '12345678';

    const goTo = (path: string) => {
        if(validate()){
            history.push(path);
        }
        else{
            console.log("Invalid Input");
        }
    }

    const loginUser = () => {
        console.log(userId, password)
    }
    const validate = () => {
        if(userId == usid && password == passwd){
            console.log();
            return true;
        }
        else{
            console.log();
            return false;
        }
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
            {/* <form onSubmit={e => goTo('/tabs/activity')} action="post"></form> */}
                <IonList>
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput type="email" onIonChange={(e: any) => setUserId(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Password</IonLabel>
                        <IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonButton expand="block" onClick={(e) => goTo('/tabs/activity')}>Log in</IonButton>
                </IonList>
            <div>
                <a href="/signup" onClick={(e) => {e.preventDefault(); goTo('/signup')}}>Create account instead</a>
                <a href="/reset-password" onClick={(e) => {e.preventDefault(); goTo('/reset-password')}}>Forgot your password?</a>
            </div>
        </IonContent>
        </>
    );
}