fetch('/admin/delete', {
  method: 'POST',
})
  .then(() => console.log('Deleted the account!'))
  .catch(err => console.error(err));
