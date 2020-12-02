import { IonSearchbar, IonList, IonItem, IonLabel, IonGrid, IonCol, IonRow } from '@ionic/react';
import React, { useState } from 'react';
import { getRecord, Record } from '../../actions/searchRecords'
import './ExploreContainer.css';

interface ContainerProps { }


const RecordSearchContainer: React.FC<ContainerProps> = () => {

  const [records, setRecords] = useState<Record[]>([]);

  const setRecordText = async (query: string | undefined) => {
    if (query) {
      const results: any = await getRecord(query);
      setRecords(results)
    }
  }
  console.log(records)
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol sizeLg="4" size-sm-="2"></IonCol>
          <IonCol sizeLg="4" size-sm-="8" > 
            <IonSearchbar placeholder="Search by Name or Cert Number" onIonChange={e => setRecordText(e.detail.value)}></IonSearchbar>
          </IonCol>
          <IonCol sizeLg="4" size-sm-="2"></IonCol>
        </IonRow>
      </IonGrid>
      <IonList>
        {records && records.map((record, certNumber) => (
          <IonItem key={certNumber}>
            <IonLabel>
              <h1>{record.FirstName}</h1>
              <div>{record.LastName}</div>
              <div>{record.CertificationNumber}</div>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default RecordSearchContainer;
