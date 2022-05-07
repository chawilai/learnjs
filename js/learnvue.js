const vueContent = new Vue({
    el: "#vueContent",
    data: {
        google: "Learn JS",
        title: "",
        body: "",
        buttonClass: "",
        language: [
            // 'PHP',
            // 'Javascript',
            // 'Go',
            // 'Java'
        ],
        data: [],
        clock: 0,
        clockInterval: null
    },
    methods: {
        sayHellow() {
            alert("Hello")
        },
        saySorry() {
            Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
              )
        },
        getdata() {
            axios.get('getdata.php', {
                params: {
                  token: 'xxxyyy'
                }
              })
              .then((response) => {
                  this.data = response.data
              })
              .catch((error) => {
                console.log(error);
              })
              .then(() => {
                // always executed
              }); 
        },
        updateClock() {
            this.clockInterval = setInterval(() => {
                this.clock++
            }, 1000);
        },
        stopClock() {
            clearInterval(this.clockInterval);
        },
        resetClock() {
            this.stopClock()
            this.clock = 0
        },
        formSubmit() {
            Swal.fire({
                title: 'Are you sure?',
                text: "บันทึกข้อมูล ใหม่ เข้าระบบ!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ยืนยันจ้าา!'
              }).then((result) => {
                  if (result.isConfirmed) {
                    
                      let formData = new FormData()

                      formData.append("title", this.title)
                      formData.append("body", this.body)
      
                    axios.post('adddata.php', formData)
                        .then((response) => {
                            if (response.data) { 
                                Swal.fire(
                                    'สำเร็จ!',
                                    'แสดงข้อมูลใหม่ใน List แล้ว.',
                                    'success'
                                )
                                this.getdata()
                            } else {
                                Swal.fire(
                                    'ล้มเหลว!',
                                    'โปรดตรวจสอบ.',
                                    'error'
                                )
                            }
                      })
                      .catch((error) => {
                        console.log(error);
                      })
                }
              })


        },
        addClass() {
            this.buttonClass = "btn"
        },
        removeClass() {
            this.buttonClass = ""
        },
    },
    mounted() {
        // console.log(this.language)
        // this.sayHellow()
        // this.saySorry()
    }

})