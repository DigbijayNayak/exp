import { IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";


export const SignupPage = ({history}: any) => {
    const goTo = (path: string) => {
        history.push(path, {direction: 'forward'});
    }

    return(
        <>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start"></IonButtons>
                    <IonTitle>Signup</IonTitle>
                </IonToolbar>

            </IonHeader>

            <IonContent>
                <form onSubmit={e => {e.preventDefault(); goTo('tabs/activity')}} action="post">
                    <IonList>
                        <IonItem>
                            <IonLabel>Email</IonLabel>
                            <IonInput type="email"></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Password</IonLabel>
                            <IonInput type="password"></IonInput>
                        </IonItem>

                        <IonButton expand="block" type="submit">Sign up</IonButton>
                    </IonList>
                </form>

                <div>
                    <a href="/login" onClick={(e) => { e.preventDefault(); goTo('login')}}>Log in instead</a>
                </div>
            </IonContent>
        </>
    )
}