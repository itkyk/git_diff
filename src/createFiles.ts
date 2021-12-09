import {exec as Exec} from "child_process";
import Util from "util";
import Decompress from "decompress";
import DecompressTarxz from "decompress-tarxz";

const exec = Util.promisify(Exec)

const CreateFiles = async(_commit:string, _branch:string) => {
    const commit = _commit;
    const branch = _branch;
    const outPutDir = "./archive";
    const outPutFile = `${outPutDir}/diff.tar`
    console.log(outPutFile)
    await exec(`git archive --format=tar \`git diff --name-only ${branch} ${commit} --diff-filter=ACMR\` -o ${outPutFile}`);
    console.log("解凍")
    Decompress(
        outPutFile,
        outPutDir,
        {
            plugins: [
                DecompressTarxz
            ]
        }
    ).then(r =>{})
}

export default CreateFiles;