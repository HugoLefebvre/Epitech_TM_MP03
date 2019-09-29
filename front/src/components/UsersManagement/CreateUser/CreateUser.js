import axios from 'axios'

export default {
  name: 'create-user',
  components: {},
  props: [],
  data () {
    return {
      username:'',
      email: '', 
      element:'',
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    // Submission from the form
    submit: function() {
      this.createUser().then(this.redirection());
    },

    // Create a user
    createUser: function(){
      return axios({
        method: 'post',
        url: 'http://localhost:4000/api/users',
        data: {
          user : {
            username : this.username,
            email : this.email
          }
        }
      }).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      })
    },

    redirection() {
      this.$router.push({
        name: 'users'
      });
    }
  }
}
