import axios from 'axios'
import main from '../../../App'

export default {
  name: 'connexion',
  components: {},
  props: [],
  data () {
    return {
        email:'',
        password:'',
        error_conn:''
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {

      submit: function() {
        this.ConnectUser().then(this.redirection);
      },

      ConnectUser: function() {
          var self = this;
        // Must return to authorize then clause
        return axios({
          method: 'post',
          url: 'http://localhost:4000/api/users/sign_in',
          data: {
                  email : this.email,
                  password : this.password
          }
        }).then(function(response) {
            self.error_conn = ""

            localStorage.AccessKey = response.data.jwt;
            localStorage.IdUser = response.data.idCurrentUser;
            localStorage.Role = response.data.roleCurrentUser;
            self.$parent.AccessKey = response.data.jwt;

            return axios({
                method: 'get',
                url: 'http://localhost:4000/api/users/' + localStorage.IdUser ,
                headers: {
                    'Authorization': 'Bearer ' + response.data.jwt
                }
            }).then(function(sec_rep) {
                localStorage.Username = sec_rep.data.data.username;
                localStorage.Email = sec_rep.data.data.email;
            }).catch(function(error){
                console.log(error);
            });

        }).catch(function(error){
            self.error_conn = "Connexion failed"
            console.log(error);
        });
      }
  }
}
