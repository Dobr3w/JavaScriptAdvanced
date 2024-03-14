function encodeAndDecodeMessages() {
    const mainDiv = document.getElementById("main");
    let [encodeBtn, decodeBtn] = mainDiv.querySelectorAll("button");

    encodeBtn.addEventListener("click", encodeMsg);
    decodeBtn.addEventListener("click", decodeMsg);
    let [writeMsg, lastMsg] = mainDiv.querySelectorAll("textarea");

    function encodeMsg() {
        let writeMsgValue = writeMsg.value;
        let encodedMsg = "";

        for (let i = 0; i < writeMsgValue.length; i++) {
            let ascii = writeMsgValue.charCodeAt(i) + 1;
            let newText = String.fromCharCode(ascii);
            encodedMsg += newText;
        }

        lastMsg.value = encodedMsg;
        writeMsg.value = "";
    }

    function decodeMsg() {
        let lastMsgValue = lastMsg.value;
        let decodedMsg = "";

        for (let i = 0; i < lastMsgValue.length; i++) {
            let ascii = lastMsgValue.charCodeAt(i) - 1;
            let newText = String.fromCharCode(ascii);
            decodedMsg += newText;
        }

        lastMsg.value = decodedMsg;
    }
}