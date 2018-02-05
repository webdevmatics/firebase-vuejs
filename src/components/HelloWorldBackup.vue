<template>
  <div class="hello">
      <div class="container">
        <h3>Movies to watch</h3>
<div class="row">
   <div class=" col-md-6 col-md-offset-3">
          <input placeholder="add movie" @keyup.enter="addMovie" type="text" v-model="movie" class="form-control">  
        
         <ul>
          <li v-for="(movie,key) in fireData" :key=key >
             <h4>{{movie.name}} <button class="btn btn-xs btn-default" @click='editFormMode.push(key);'>edit</button></h4>  
              <input v-if='editFormMode.includes(key)' type="text" v-model='editingMovie[key]' @keyup.enter='editMovie(key)' class="form-control">

          </li>
          
        </ul>
        
        </div>

</div>
     
       
        
        </div>    
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      movies:[],
      movie:null,
      fireData:null,
      editingMovie:[],
      editFormMode:[]
    }
  },
  methods:{
    addMovie(){
      this.movies.push(this.movie);
      firebase.database().ref('movies').push({
          name:this.movie
      });

      this.movie=null;
      
  },

  editMovie(key){
    firebase.database().ref('movies/'+key).set({
      name: this.editingMovie[key]
    })
    .then((data)=>{
      this.fetchFirebaseData();
      this.editingMovie[key]=null;
      this.editFormMode=[];
    })
  },

  fetchFirebaseData(){
    firebase.database().ref('movies').once('value')
        .then((data)=>{
          this.fireData=data.val();
          console.log(data)})
        .catch((error)=>{console.log(error)})
  }

  },

  created(){
    
        this.fetchFirebaseData();
        

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
