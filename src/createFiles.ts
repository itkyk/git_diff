import {exec as Exec} from "child_process";
import fs from "fs";
import rimraf from "rimraf";
import Util from "util";
import Utility from "./util";

const exec = Util.promisify(Exec);


const CreateFiles = async(_commit:string, _branch:string) => {
    const commit = _commit;
    const branch = _branch;
    const outPutDir = "./gitDiffTemp";
    const outPutFile = `${outPutDir}/diff.tar`;
    if (!fs.existsSync(outPutDir)) {
        Utility.log("---------Create Temp Directory---------");
        await exec("mkdir ./gitDiffTemp");
    }
    Utility.log("---------Get Git Archive Start ---------")
    await exec(`git archive ${commit} --format=tar \`git diff --name-only ${branch} ${commit} --diff-filter=ACMR\` -o ${outPutFile}`);
    await exec(`tar -zxvf ${outPutFile} -C ${outPutDir}`);
    fs.rm(outPutFile, (error) => {
        if (error) {
            Utility.log("---------Get Git Archive Error---------", "\u001b[31m");
            console.log(error);
        } else {
            Utility.log("---------Getting Git Archive Done---------")
        }
    })
}

export default CreateFiles;