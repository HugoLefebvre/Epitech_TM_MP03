import axios from 'axios';

export default {
  name: 'working-time',
  components: {},
  props: [],
  data () {
    return {
      userID : this.$route.params.userID,
      dataBack : '',
        role:''
    }
  },
  computed: {

  },
  mounted () {

      if(localStorage.Role) this.role = localStorage.Role

    var self = this;
    console.log("test")
    console.log(this.$parent.$parent.Role)
    if(this.$parent.$parent.Role != '' && this.$parent.$parent.Role != 1){
        axios.get("http://localhost:4000/api/workingtimes/"+this.$route.params.userID, {
            params : {
                start : '',
                end : ''
            },
            headers: {
                'Authorization': 'Bearer ' + localStorage.AccessKey
            }
        })
            .then(function(response) {
                self.dataBack = response.data.data;
            })
            .catch(function (error) {
                console.log(JSON.stringify(error, null, 2));
            });
    } else if (this.$parent.$parent.Role != '' && this.$parent.$parent.Role == 1){
        axios.get("http://localhost:4000/api/workingtimes/"+this.$parent.$parent.IdUser, {
            params : {
                start : '',
                end : ''
            },
            headers: {
                'Authorization': 'Bearer ' + localStorage.AccessKey
            }
        })
            .then(function(response) {
                self.dataBack = response.data.data;
            })
            .catch(function (error) {
                console.log(JSON.stringify(error, null, 2));
            });
    }

  },
  methods: {
    createWorkingTime: function() {
      this.$router.push("/working-times/" + this.userID + "/create");
    },

    updateWorkingTime: function(start, end) {
      this.$router.push("/working-times/" + this.userID + "/edit/" + start + "&" + end);
    },

    deleteWorkingTime: function(element) {
      axios.delete("http://localhost:4000/api/workingtimes/"+element, {
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
    },
    popupDelete: function(id){
      this.$modal.show('dialog', {
          title: 'Confirmation',
          text: 'Are you sure you want to delete this working time ?',
          buttons: [
              {
                  title: 'Delete',
                  handler: () => { this.deleteWorkingTime(id) }
              },
              {
                  title: 'Close'
              }
          ]
      })
    },
  }
}
