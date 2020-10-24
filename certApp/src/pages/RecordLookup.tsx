import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import RecordSearchContainer from '../components/CertSearch';
import './Home.css';

const RecordLookup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pop Neuro Certification Lookup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RecordSearchContainer />
      </IonContent>
    </IonPage>
  );
};

export default RecordLookup;
