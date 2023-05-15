export default function replacer(phone) {
  let phoneNumber = phone;
  let regexp;
  if (phoneNumber[0] === '+') {
    regexp = /[-\s)(]/g;
  } else {
    phoneNumber = phoneNumber.replace('8', '+7');
    regexp = /[-\s)(]/g;
  }
  return phoneNumber.replace(regexp, '');
}
