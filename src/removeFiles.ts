import Fs from "fs";
import Utility from "./util";
const RemoveFiles = async() => {
    const archivePath = `./gitDiffTemp`;
    await Fs.rmSync(archivePath, {recursive: true});
    Utility.log("---------Remove TEMP Directory---------");
}
export default RemoveFiles;