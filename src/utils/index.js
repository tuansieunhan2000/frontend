export const formatDate = (data) => {
    let date = new Date(data);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
};
