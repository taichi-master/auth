/* intersperse: Return an array with the separator interspersed between
 * each element of the input array.
 *
 * > _([1,2,3]).intersperse(0)
 * [1,0,2,0,3]
 */
function intersperse ( arr, sep ) {
  if ( arr.length === 0 ) {
    return []
  }

  return arr.slice( 1 ).reduce( function ( sb, x, i ) {
    return sb.concat( [ sep, x ] )
  }, [arr[0]] )
}

module.exports = intersperse.default = intersperse.intersperse = intersperse
