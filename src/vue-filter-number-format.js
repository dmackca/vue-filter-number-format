/**
 * number formatting helper functions
 * can be used in vue filters
 */

/**
 * return a filter function
 * @param {Function} numeral Numeral.js peer dependency
 * @return {Function} number formatting filter
 */
export default (numeral) => {
    /**
     * apply a Numeral.js formatting string to an input value
     * @param {Number} val input value to be changed
     * @param {String} [format='0,0'] Numeral.js format string
     * @return {String} formatted output string
     */
    return (val, format = '0,0') => numeral(val).format(format);
};
