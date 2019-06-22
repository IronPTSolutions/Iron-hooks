const getData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve([{
      "color": "#4A4E69",
      "value": Math.floor(Math.random() * 100)
    },
    {
      "color": "#9A8C98",
      "value": Math.floor(Math.random() * 100)
    }
    ])
  }, 2000)
})

export default {
  getData
}