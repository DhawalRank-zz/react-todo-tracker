export function checkDate(date) {
  var regex = new RegExp(/(\d{4})\-(\d{2})\-(\d{2})/);
  return regex.test(date);
}