class Utility {
    static log(arg:string, color:string = "\u001b[34m") {
        console.log(`${color}${arg}\u001b[0m`)
    }
}

export default Utility;