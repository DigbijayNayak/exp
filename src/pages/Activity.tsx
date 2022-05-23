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

  const goTo = (path: string) => {
    history.push(path);
  };

  React.useEffect(() => {
    sendRequest().then((data) => {
      setListItems(data.data);
    });
  }, []);

  const sendRequest = () => {
    return axios
      .get("https://orangevalleycaa.org/api/videos")
      .then((response) => {
        console.log(response);
        return response.data;
      });
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
          <IonList color="primary">
            {listItems.map((item: any) => {
              return (
                <IonItem>
                  {/* <IonAvatar slot="start">
                                    <IonImg src={item['category']}> </IonImg>
                            </IonAvatar> */}
                  <IonLabel>
                    <h3>
                      {" "}
                      {item["id"]} {item["category"]}{" "}
                    </h3>
                  </IonLabel>
                </IonItem>
              );
            })}
          </IonList>

          {/* <h2>Activity</h2>
                <IonButton onClick={() => goTo('/tabs/activity/detail/thing')}>Go To Details</IonButton> */}
        </IonContent>
      </IonPage>
    </>
  );
};

export default ActivityPage;
