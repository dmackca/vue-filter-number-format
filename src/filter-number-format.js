/**
 * number formatting helper functions
 * can be used in vue filters
 */
import numeral from 'numeral';

/**
 * apply a numeral.js formatting string to an input value
 * @param {Number} val input value to be changed
 * @param {String} [format='0,0'] numeral.js format string
 * @return {String} formatted output string
 */
export default (val, format = '0,0') => numeral(val).format(format);
