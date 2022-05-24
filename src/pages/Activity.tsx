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
import { useState, useContext, createContext } from "react";
import axios from "axios";
// const UserContext = createContext();
const ActivityPage = ({ history }: any) => {
  const [listItems, setListItems] = useState<any>([]);

  const goTo = (path: string) => {
    history.push(path);
  };

  React.useEffect(() => {
    sendRequest().then((response) => {
      console.log(response);
      setListItems(response);
    });
  }, []);

  const sendRequest = () => {
    const userData =  axios
      .get("https://orangevalleycaa.org/api/videos")
      .then((response) => {
        // console.log(response);
        return response.data;
      });
    return userData;
  };

  return (
    <>
    {/* <UserContext.Provider value={listItems}> */}
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
                      <IonItem key={item['id']} button onClick={() => goTo('/detail')}>
                        <IonLabel>
                          <IonImg src={item['cropped']}></IonImg>
                          <h2>{item['name']}</h2>
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
      {/* </UserContext.Provider> */}
    </>
  );
};

export default ActivityPage;
