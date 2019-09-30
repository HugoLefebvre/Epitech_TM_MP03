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
        role:''
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
          var self = this;
        // Must return to authorize then clause
        return axios({
          method: 'post',
          url: 'http://localhost:4000/api/users',
          data: {
              user : {
                  username : this.pseudo,
                  email : this.email,
                  password : this.password,
                  role_id : this.role
              }
          },
            headers: {
                'Authorization': 'Bearer ' + localStorage.AccessKey
            }
        }).then(function(response) {
            self.$parent.$modal.close();
        }).catch(function(error){
          console.log(error);
        });
      }
  }
}
