import React from "react";
import { IonTabs, IonRouterOutlet, IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react"
import { Redirect, Route } from "react-router"

import { DetailPage } from "./Detail"
import { people, search, person } from 'ionicons/icons'
import { ProfilePage } from "./Profile";
import { SearchPage } from "./Search";
import ActivityPage from "./Activity";

const AppStack: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect path="/tabs" to="/tabs/activity" exact={true} />
                <Route path="/tabs/:tab(activity)" component={ActivityPage} exact={true} />
                <Route path="/tabs/:tab(search)" component={SearchPage} exact={true} />
                <Route path="/tabs/:tab(profile)" component={ProfilePage} exact={true} />
                <Route path="/tabs/:tab(activity)/detail/:thing" component={DetailPage} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="activity" href="/tabs/activity">
                    <IonIcon icon={people} />
                    <IonLabel>Activity</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/tabs/search">
                    <IonIcon icon={search}></IonIcon>
                    <IonLabel>Search</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon icon={person}></IonIcon>
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};
export default AppStack;