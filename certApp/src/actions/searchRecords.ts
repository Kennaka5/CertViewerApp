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
//use for local host dev `http://localhost:3000/records.json?q=${query}`;
// use for production `https://certviewerapp1.herokuapp.com/records.json?q=${query}`;
    const RecordRequestURL = `https://certviewerapp1.herokuapp.com/records.json?q=${query}`;
    const response = await axios.get<RecordResponse>(RecordRequestURL);
    return response.data.value;
}