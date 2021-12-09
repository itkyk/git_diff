import Rimraf from "rimraf";
import Utility from "./util";
const RemoveFiles = async() => {
    const archivePath = `./gitDiffTemp`;
    Rimraf.sync(archivePath);
    Utility.log("---------Remove TEMP Directory---------");
}
export default RemoveFiles;