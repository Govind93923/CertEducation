fetch('https://forms.gle/quZ2kZUqvHAYVMtZ9')
  .then(r => r.text())
  .then(t => {
      const match = t.match(/\[1846923513(.*?)\]\]\]\]/);
      console.log(match ? match[0] : 'Not found');
  })
  .catch(console.error);
