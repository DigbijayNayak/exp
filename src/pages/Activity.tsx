import React from "react";

import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import axios from "axios";

const ActivityPage = ({ history }: any) => {
  const [listItems, setListItems] = useState<any>([]);

  // const goTo = (path: string) => {
  //   history.push(path);
  // };

  React.useEffect(() => {
    sendRequest().then((response) => {
      console.log(response);
      setListItems(response);
    });
  }, []);

  const sendRequest = () => {
    const userData =  axios
      .get("https://api.github.com/users/timmywheels/repos")
      .then((response) => {
        // console.log(response);
        return response.data;
      });
    return userData;
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Activity</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonList>
              {
                listItems.map((item: any) => {
                  return (
                      <IonItem key={item['id']}>
                        <IonLabel>
                          <h3>{item['name']}</h3>
                        </IonLabel>
                      </IonItem>
                  );
                })
              }
            </IonList>

          {/* <h2>Activity</h2>
          <IonButton onClick={() => goTo('/tabs/activity/detail/thing')}>Go To Details</IonButton> */}
        </IonContent>
      </IonPage>
    </>
  );
};

export default ActivityPage;
