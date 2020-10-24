import axios from 'axios'

export interface RecordResponse {
    ok: boolean
    value: Record[]
}

export interface Record {
    FirstName: string
    LastName: string
    CertificationNumber: string
}

export async function getRecord(query: string): Promise<Record[]> {

    const RecordRequestURL = `http://localhost:3000/records.json?q=${query}`;
    const response = await axios.get<RecordResponse>(RecordRequestURL);
    return response.data.value;
}