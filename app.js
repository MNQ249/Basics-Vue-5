const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fName:'',
      lastName:''
    };
  },
  watch:{

    counter(value){
      if(value > 50 || value < -50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        })
      }
    },
    // counter(value){
    //   if (value > 50){
    //      this.counter = 0 ;
    //   }
    // }
  //   name(value){
  //     if (value === ''){
  //       this.fName = '';
  //     }else{
  //   this.fName = value + ' ' + this.lastName;
  // }
  //   },
  //   lastName(value){
  //     if (value === ''){
  //       this.fName = '';
  //     }else{
  //   this.fName = this.name + ' ' + value;
  // }
  //   },
  },
  computed:{
    fullname(){
      console.log('Running agin ....');
      if (this.name === ''){ return '';}
      return this.name + ' ' +  lastName ; // computed is mush better than mehtod in calculation 
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
