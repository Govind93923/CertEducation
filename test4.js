fetch('https://forms.gle/quZ2kZUqvHAYVMtZ9')
  .then(r => r.text())
  .then(t => {
      const match = t.match(/\[1846923513,.*?(?=\])/g);
      console.log("MATCH:", match);
  })
  .catch(console.error);
