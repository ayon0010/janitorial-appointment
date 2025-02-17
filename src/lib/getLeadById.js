export const revalidate = 1;
export default async function getLeads(leads, states, id) {
    let url = ``;
    if (leads && states && id) {
        url = `https://http://localhost:5000//getLeads?leadName=${leads}&states=${states}&id=${id}`;
    }
    else if (leads && states) {
        url = `https://http://localhost:5000//getLeads?leadName=${leads}&states=${states}`;
    }
    else if (leads) {
        url = `https://http://localhost:5000//getLeads?leadName=${leads}`;
    }
    else {
        url = `https://http://localhost:5000//getLeads`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}