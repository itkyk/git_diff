import {exec as Exec} from "child_process";
import fs from "fs";
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
    await exec(`git archive ${commit} --format=tar \`git diff --name-only ${branch} ${commit} --diff-filter=ACMR\` -o ${outPutFile}`);
    await exec(`tar -zxvf ${outPutFile} -C ${outPutDir}`);
    await exec(`rm ${outPutFile}`);
}

export default CreateFiles;