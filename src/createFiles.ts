import {exec} from "child_process";

class CreateFiles {
    private readonly child:any;
    constructor(_commit:string, _branch:string) {
        this.child = exec(`git archive --format=tar \`git diff --name-only ${_branch} ${_commit} --diff-filter=ACMR\` -o archive`);
    }

    init = () => {

    }
}

export default CreateFiles;