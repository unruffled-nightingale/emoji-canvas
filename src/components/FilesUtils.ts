const STORAGE_KEY = "emoji-art";

export const getLocalStorage = () => {
    console.log("Loading data from local storage.");
    let storedData = localStorage.getItem(STORAGE_KEY)
    if (storedData === null) return {}
    try {
        return JSON.parse(storedData)
    } catch {
        return {}
    }
};

export const saveToLocalStorage = (data: {}) => {
    console.log("Saving data from local storage.");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
};