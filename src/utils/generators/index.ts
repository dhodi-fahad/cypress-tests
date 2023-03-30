
/**
 * Generates random string
 * @returns {string}
 */
export const generateData = ():string => getRandomInt(100)+(Math.random() + 1).toString(36).substring(7)+ (Math.random() + 1).toString(36).substring(7);

/**
 * Generates random integer
 * @param {number} max - maximum value to be generated
 * @returns {number}
 */
export const getRandomInt = (max:number):number => Math.floor(Math.random() * max);


/**
 * Converts provided to YYYY-MM-DD format
 * @param {Date} date - date tobe formatted
 * @returns {string} - formatted date YYYY-MM-DD
 * @example
 * let formatted_date = convertDate('2023-03-25T20:51:50.897Z')
 * */
export const convertDate = (date:Date):string => {
  let _date = new Date(date);
  return _date.getFullYear() + '-' + ('0' + (_date.getMonth() + 1)).slice(-2) + '-' + ('0' + _date.getDate()).slice(-2)
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
