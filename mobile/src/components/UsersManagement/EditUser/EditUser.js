import axios from 'axios';

export default {
  name: 'EDIT',
  components: {},
  props:{
    id: String,
  },
  data () {
    return {
      username: '',
      email:  '',
      password: '',
      role:'',
      userRole:''
    }
  },
  computed: {

  },
  mounted () {

    var idUser = this.id
    if(this.$route.params.userID) idUser = this.$route.params.userID;
    if(idUser == "") idUser = localStorage.IdUser
    if(localStorage.Role) this.role = localStorage.Role

    var self = this;

    axios({
      method: 'get',
      url: 'http://localhost:4000/api/users/' + idUser,
      headers: {
        'Authorization': 'Bearer ' + localStorage.AccessKey
      }
    })
    .then(function(response) {
      self.username = response.data.data.username;
      self.email = response.data.data.email;
    })
    .catch(function(error) {
      console.log(JSON.stringify(error, null, 2));
    })
  },
  methods: {

    submit: function() {
      this.updateUser();
    },

    updateUser: function() {
      var idUser = this.id
      var self = this
      if(this.$route.params.userID) idUser = this.$route.params.userID;
      if(idUser == "") idUser = localStorage.IdUser
      if(localStorage.Role) this.role = localStorage.Role
      return axios({
        method: 'put',
        url: 'http://localhost:4000/api/users/' + idUser,
        data: {
          user: {
            username: self.username,
            email: self.email,
            password: self.password
          }
        },
        headers: {
          'Authorization': 'Bearer ' + localStorage.AccessKey
        }
      }).then(function(response) {
        localStorage.Username = self.username;
        localStorage.Email = self.email;
        localStorage.Role = self.role;
        self.$modal.show('dialog', {
          title: 'Confirmation',
          text: 'Successfully modified user informations',
          buttons: [
            {
              title: 'Close'
            }
          ]
        })
        self.password = ""
      }).catch(function(error) {
        console.log(error);
      })
    }
  }
}
