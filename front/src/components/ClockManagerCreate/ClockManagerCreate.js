import axios from 'axios'

export default {
  name: 'clock-manager-create',
  components: {},
  props: [],
  data () {
    return {
      userID : this.$route.params.userID,
      time: '',
      status: ''
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
      this.createWorkingTime().then(this.redirection);
    },

    createWorkingTime: function() {
      // Must return to authorize then clause
      console.log("time " + this.time)
      console.log("status " + this.status)
      return axios({
        method: 'post',
        url: 'http://localhost:4000/api/clocks/' + this.userID,
        data: {
          clocking : {
            time: this.time,
            status: this.status
          }
        }
      }).then(function(response) {
      }).catch(function(error){
        console.log(error);
      });
    },

    // Return to the list of working-time of the user
    redirection(){
      this.$router.push({
        path: `/clock-manager/${this.userID}`
      });
    }
  }
}
