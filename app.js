const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed:{
    fullname(){
      console.log('Running agin ....');
      if (this.name === ''){ return '';}
      return this.name + ' ' + " AlQahtani"; // computed is mush better than mehtod in calculation 
    }
  },
  methods: {
    fullName(){
     
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
