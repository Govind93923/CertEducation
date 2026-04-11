fetch('https://forms.gle/quZ2kZUqvHAYVMtZ9')
  .then(r => r.text())
  .then(t => {
      const match = t.match(/action="(https:\/\/docs\.google\.com\/forms[^"]+)"/);
      console.log(match ? match[1] : 'No form action found');
  })
  .catch(console.error);
