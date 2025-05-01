export const getSection = () => {
    return localStorage.getItem("section") || "home";
};

export const setSection = (section) => {
    localStorage.setItem("section", section);
};