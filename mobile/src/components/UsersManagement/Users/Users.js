import axios from 'axios'
import Registration from "../../Login/Registration/index";

export default {
  name: 'users',
  components: {
    Registration
  },
  props: [],
  data () {
    return {
      dataBack : '',
      userRole: ''
    }
  },
  computed: {

  },
  mounted () {

    if(localStorage.Role) this.userRole = localStorage.Role

    var self = this;

    axios({
      method: 'get',
      url: 'http://localhost:4000/api/users',
      headers: {
        'Authorization': 'Bearer ' + localStorage.AccessKey
      }
    })
    .then(function (response) {
      console.log(JSON.stringify(response, null, 2));
      self.dataBack = response.data.data;
    })
    .catch(function (error) {
      console.log(JSON.stringify(error, null, 2));
    });
  },
  methods: {

    displayCreate: function(){
      this.$modal.show(Registration, {
        text: '',
      })
    },

    popupDelete: function(id){
      this.$modal.show('dialog', {
        title: 'Confirmation',
        text: 'Are you sure you want to delete this user ?',
        buttons: [
          {
            title: 'Delete',
            handler: () => { this.deleteUser(id) }
          },
          {
            title: 'Close'
          }
        ]
      })
    },

    createUser: function() {
      this.$router.push({
        name: 'create-user'
      });
    },

    editUser: function(id) {
      this.$router.push({
        path: `/user/edit-user/${id}`
      })
    },

    deleteUser: function(id) {
      axios({
        method: 'delete',
        url: 'http://localhost:4000/api/users/' + id,
        headers: {
          'Authorization': 'Bearer ' + localStorage.AccessKey
        }
      })
      .then(function(response) {
        // Refresh the page
        document.location.reload(true);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
      });      
    }
  }
}
