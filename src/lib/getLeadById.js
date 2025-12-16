export const revalidate = 1;
export default async function getLeads(leads, states, id) {
    let url = ``;
    if (leads && states && id) {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/getLeads?leadName=${leads}&states=${states}&id=${id}`;
    }
    else if (leads && states) {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/getLeads?leadName=${leads}&states=${states}`;
    }
    else if (leads) {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/getLeads?leadName=${leads}`;
    }
    else {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/getLeads`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}