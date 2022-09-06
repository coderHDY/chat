import { ipt, send } from "./doms";
import { sendRobotMsg, initMsg } from "./actions";
const init = () => {
    initMsg("robot");
    send.addEventListener("click", sendRobotMsg);
    ipt.addEventListener("keydown", (e) => e.keyCode === 13 && sendRobotMsg());
}

export {
    init,
}