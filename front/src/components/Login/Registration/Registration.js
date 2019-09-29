import axios from 'axios'

export default {
  name: 'registration',
  components: {},
  props: [],
  data () {
    return {
        pseudo:'',
        email:'',
        password:'',
        confirmPassword:''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
      // At the submission of the form
      submit: function() {
        // Synchronize methods : do first then do the second
        this.RegisterUser().then(this.redirection);
      },

      RegisterUser: function() {
        // Must return to authorize then clause
        return axios({
          method: 'post',
          url: 'http://localhost:4000/api/users',
          data: {
              user : {
                  username : this.pseudo,
                  email : this.email,
                  password : this.password,
                  role_id : 1
              }
          }
        }).then(function(response) {
            console.log(response);
        }).catch(function(error){
          console.log(error);
        });
      },

      // Return to the list of working-time of the user
      redirection(){
        this.$router.push({
          path: `/user`
        });
      }
  }
}
