const formatDate = (date) => {

    date = new Date(date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} (${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes})`;
}

export default formatDate;