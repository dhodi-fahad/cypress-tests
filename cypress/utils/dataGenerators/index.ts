import * as moment from "moment";

/**
 * Generates random string
 * @returns {string}
 */
export const generateData = ():string => getRandomInt(100)+(Math.random() + 1).toString(36).substring(7)+ (Math.random() + 1).toString(36).substring(7);

/**
 * Generates random integer
 * @param {number} maxValue - maximum value to be generated
 * @returns {number}
 */
export const getRandomInt = (max:number):number => Math.floor(Math.random() * max);


/**
 * Converts provided to YYYY-MM-DD format
 * @param {string} date - date tobe formatted
 * @returns {string} - formatted date YYYY-MM-DD
 * @example
 * let formatted_date = convertDate('2023-03-25T20:51:50.897Z')
 * */
export const convertDate = (date):string => {
    let _date = new Date(date);
    return _date.getFullYear() + '-' + ('0' + (_date.getMonth() + 1)).slice(-2) + '-' + ('0' + _date.getDate()).slice(-2)
}

/**
 * Converts digits to UGX currency  format
 * @param {number} amount - amount to format
 * @returns {string} - formatted amount
 * @example
 * convertAmountToUGX(10000) -> UGX 10,000
 */
export const  convertAmountToUGX = (amount:number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
    });

    return formatter.format(amount)
}

/**
 * converts date to Tue Apr 04 2023, 6:26:48 PM format
 * @param {string} date
 */
export const dateStringTimeConvert = (date:string) => {
    let new_date = date.split('GMT').shift();
    let myDate = new Date(new_date);
    const time_now  = new Intl.DateTimeFormat('default', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(myDate);
    return `${myDate.toDateString()}, ${time_now}`;
}

/**
 * Generates current date in Tue Apr 04 2023 format
 * @returns {string} - current date YYYY-MM-DD
 * @example
 * dateStringConvert('2023-04-04') -> Tue Apr 04 2023
 */
export const dateStringConvert = (date:string) => {
    let myDate = new Date(date);
    return myDate.toDateString();
}

/**
 * Generates current date in YYYY-MM-DD format
 * @returns {string} - current date YYYY-MM-DD
 * @example
 * let today =  getTodaysDate()
 */
export const getTodaysDate = ():string => {
    let today = new Date();
    return convertDate(today)
}

export function formatDate(date) {
    return moment(date).format('Do MMMM YYYY')
}