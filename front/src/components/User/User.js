import axios from 'axios'

export default {
  name: 'user',
  components: {},
  props: [],
  data () {
    return {
      userID:'',
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    // createUser: function(userID){

    // },
    
    // updateUser: function(userID){

    // }, 

    getUser: function(){
      axios.get(`http://localhost:4000/api/users/show?id=1`)
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      this.errors.push(e)
    })
    }, 
    
    // deleteUser: function(userID){
      
    // }
  }
}
