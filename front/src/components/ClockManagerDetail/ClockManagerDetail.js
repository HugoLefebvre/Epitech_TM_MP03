import axios from 'axios';

export default {
  name: 'clock-manager-detail',
  components: {},
  props: [
  ],
  data () {
    return {
      userID : this.$route.params.userID,
      dataBack : '',
    }
  },
  computed: {

  },
  mounted () {
    var self = this;

    axios.get("http://localhost:4000/api/clocks/"+this.$route.params.userID, {
                params : {
                  start : '',
                  end : ''
                }
              })
              .then(function(response) {
                self.dataBack = response.data.data;
              })
              .catch(function (error) {
                console.log(JSON.stringify(error, null, 2));
              });
  },
  methods: {
    createWorkingTime: function() {
      this.$router.push("/clock-manager/" + this.userID + "/create");
    },
  }
}
