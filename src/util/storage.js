export const getSessionStorage = (name) => {
    return JSON.parse(sessionStorage.getItem(name));
};

export const setSessionStorage = (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
};