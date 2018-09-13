const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmails = (values='') => {
  // values is a string of emails
  const invalidEmails = values
  .split(',')
  .map(email => email.trim())
  .filter(email => re.test(email) === false);

  return invalidEmails.length ? `These emails are invalid: ${invalidEmails}` : undefined;
}
