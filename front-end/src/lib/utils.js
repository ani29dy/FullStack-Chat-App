// export const formatMessageTime = (date) => {
//     return new Date(date).toLocaleDateString("en-US", {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: false,
//     })
// }

export const formatMessageTime = (date) => {
    const parsedDate = new Date(date);
    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = parsedDate.getFullYear();
    const hours = String(parsedDate.getHours()).padStart(2, '0');
    const minutes = String(parsedDate.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
};
