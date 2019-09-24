const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
};

const makeStore = () => {
    const stringDom = `hi new store`;
    printToDom(`store-container`, stringDom);
};

export default { makeStore };