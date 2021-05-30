const API = 'http://localhost:9001';

export const getJSON = async (url, options = {}) => {
    const res = await fetch(`${API}/${url}`, options);
    const data = await res.json();

    return res.ok ? data : Promise.reject(data);
};

export const post = async (url, body) => {
    const result = getJSON(url, { method: 'POST', body: JSON.stringify(body) });

    return result;
};
