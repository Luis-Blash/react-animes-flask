export const postAnime = async (datos) => {
    const url = "http://localhost:5000/anime";
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    }
    const resp = await fetch(url, requestOptions);
    const data = await resp.json();
    return data;
}
