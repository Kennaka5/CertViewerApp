import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical, heart, mail } from 'ionicons/icons';
import React from 'react';
import RecordSearchContainer from '../components/certSearch/CertSearch';
import ToolBar from '../components/toolBar/ToolBar';
import './Home.css';

const RecordLookup: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonContent>
          <ToolBar />
          <div className="header">
            <h1>
              Certification Lookup
        </h1>
            <h2>
              Search for Bootcamp Graduates
        </h2>
          </div>
          <RecordSearchContainer />
        </IonContent>
      </IonPage>
    </>
  );
};

export default RecordLookup;
