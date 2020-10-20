const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName:'',
    };
  },
  watch:{
    name(value){
      if (value === ''){
        this.fullName = '';
      }else{
    this.fullName = value + ' ' + ' ALQahtani';
  }
    },
  },
  computed:{
    fullname(){
      // console.log('Running agin ....');
      // if (this.name === ''){ return '';}
      // return this.name + ' ' + " AlQahtani"; // computed is mush better than mehtod in calculation 
    }
  },
  methods: {
   
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
