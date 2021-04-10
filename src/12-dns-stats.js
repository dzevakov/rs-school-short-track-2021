/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const counter = {};
  let index = 0;
  let domain = '';
  let address = '';
  domains.forEach((element) => {
    domain = '';
    address = element;
    while (address) {
      index = address.lastIndexOf('.');
      if (index > -1) {
        domain += address.slice(index);
        address = address.slice(0, index);
      } else {
        domain += `.${address}`;
        address = '';
      }
      if (counter[domain]) {
        counter[domain] += 1;
      } else {
        counter[domain] = 1;
      }
    }
  });
  return counter;
}

module.exports = getDNSStats;
