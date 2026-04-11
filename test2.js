fetch('https://forms.gle/quZ2kZUqvHAYVMtZ9')
  .then(r => r.text())
  .then(t => {
      console.log('Includes emailAddress native field:', t.includes('name="emailAddress"'));
      console.log('Includes emailAddress JSON:', t.includes('"emailAddress"'));
  })
  .catch(console.error);
