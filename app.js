const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    fullName(){
      return this.name + ' ' + " AlQahtani";
    },

    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      // document.querySelector('input').value = '';
      this.name = '';
    }
  }
});

app.mount('#events');
