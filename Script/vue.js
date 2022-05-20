Vue.createApp({
    data(){
      return{
            urlProducts:"https://apipetshop.herokuapp.com/api/articulos",
            init:0,
            data:[],
            dataToys:[],
            dataMeds:[],
            cheked:[],
        }   
        
    },
    created(){
        fetch(this.urlProducts).then(r => r.json()).then(data => this.data = data.response);
        
    },
    mounted(){
    },
    methods:{
        
    },
    computed:{
        divide:function(){
            this.dataToys = this.data.filter(e => e.tipo.includes("Juguete"));
            console.log(this.dataToys)
            this.dataMeds = this.data.filter(e => e.tipo.includes("Medicamento"));
            
            
        },
        

    }
}).mount('#app')