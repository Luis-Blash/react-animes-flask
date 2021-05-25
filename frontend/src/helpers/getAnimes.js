export const getAnimes = async (nombre) => {
    const url = `http://localhost:5000/anime?nombre=${nombre}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
