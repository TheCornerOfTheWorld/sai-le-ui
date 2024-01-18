import Button from "./button.vue";
import { WithInstallType, withInstall } from "../../utils";

const _Button: WithInstallType<typeof Button> = withInstall(Button);
export default _Button;
