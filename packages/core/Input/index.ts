import Input from "./input.vue";
import { WithInstallType, withInstall } from "../../utils";

const _Input: WithInstallType<typeof Input> = withInstall(Input);
export default _Input;
