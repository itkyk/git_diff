import Fs from "fs";
import Utility from "./util";
const RemoveFiles = async() => {
    const archivePath = `./gitDiffTemp`;
    await Fs.rm(archivePath,  {recursive: true}, () => {});
    Utility.log("---------Remove TEMP Directory---------");
}
export default RemoveFiles;