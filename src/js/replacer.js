export default function replacer(phone) {
  if (phone[0] === '+') {
    const regexp = /[-\s)(]/g;
    return phone.replace(regexp, '');
  }
  // eslint-disable-next-line no-param-reassign
  phone = phone.replace('8', '+7');
  const regexp = /[-\s)(]/g;
  return phone.replace(regexp, '');
}
