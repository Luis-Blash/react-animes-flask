export const getAnimes = async () => {
    const url = "http://localhost:5000/anime";
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
