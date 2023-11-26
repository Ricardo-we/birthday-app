/***
 * @time time in miliseconds to wait
 */
export const waitTime = (time: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time)
    })
}