export default async function getLeads(leads, states, id) {
    let url = ``;
    if (leads && states && id) {
        url = `https://clean-job-backend-final.vercel.app/getLeads?leadName=${leads}&states=${states}&id=${id}`;
    }
    else if (leads && states) {
        url = `https://clean-job-backend-final.vercel.app/getLeads?leadName=${leads}&states=${states}`;
    }
    else if (leads) {
        url = `https://clean-job-backend-final.vercel.app/getLeads?leadName=${leads}`;
    }
    else {
        url = `https://clean-job-backend-final.vercel.app/getLeads`;
    }
    const res = await fetch(url);
    return res.json();
}