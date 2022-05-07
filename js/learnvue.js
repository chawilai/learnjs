const vueContent = new Vue({
    el: "#vueContent",
    data: {
        google: "Learn JS",
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
            axios.get('adddata.php', {
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
        }
    },
    mounted() {
        // console.log(this.language)
        // this.sayHellow()
        // this.saySorry()
    }

})