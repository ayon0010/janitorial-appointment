export default async function getLeads(leads, states, id) {
    let url = ``;
    if (leads && states && id) {
        url = `http://localhost:5000/getLeads?leadName=${leads}&states=${states}&id=${id}`;
    }
    else if (leads && states) {
        url = `http://localhost:5000/getLeads?leadName=${leads}&states=${states}`;
    }
    else if (leads) {
        url = `http://localhost:5000/getLeads?leadName=${leads}`;
    }
    else {
        url = `http://localhost:5000/getLeads`;
    }
    const res = await fetch(url);
    return res.json();
}