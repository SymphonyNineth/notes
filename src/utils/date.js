const getDate = () => {
    const formatDate = n => `${Math.floor(n / 10)}${n % 10}`;
    const date = new Date();
    return `${date.getFullYear()}-${formatDate(
        date.getMonth() + 1
    )}-${formatDate(
        date.getDate()
    )}    ${date.getHours()}:${date.getMinutes()}`;
};

export { getDate };
