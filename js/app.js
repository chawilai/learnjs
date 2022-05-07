// กำหนดตัวแปร
const facebook = document.querySelector("#facebook")
const add = document.querySelector("#add")
const remove = document.querySelector("#remove")
const getdata = document.querySelector("#getdata")
const ul = document.querySelector("#ul")

facebook.style.display = 'none'

getdata.addEventListener("click", function () {
    // console.log("getdata")

    facebook.style.display = 'inline'

    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    axios.get('adddata.php', {
        params: {
          token: 'xxxyyy'
        }
      })
      .then(function (response) {
          
          const data = response.data

        //   console.log(data)

          if (data) {
              data.forEach(item => {

                  let li = document.createElement("li")

                  li.innerText = item.title
                  li.id = item.id

                  ul.appendChild(li)

                //   console.log(item.id + item.title + item.body)
              })
          }

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
})

// // รอฟังเหตุการณ์ เมาส์อยู่บน
// add.addEventListener("mouseover", function () {
//     facebook.classList.add("btn")
// })

// // รอฟังเหตุการณ์ เมาส์เคลื่อนออก
// add.addEventListener("mouseleave", function () {
//     facebook.classList.remove("btn")
// })

