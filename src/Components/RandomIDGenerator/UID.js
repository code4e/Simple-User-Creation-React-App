const UID = (length = 10) => parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));

export default UID;