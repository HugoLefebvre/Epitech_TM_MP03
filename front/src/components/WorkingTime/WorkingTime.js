export default {
  name: 'working-time',
  components: {},
  props: [],
  data () {
    return {
      dataBack : '',
    }
  },
  computed: {

  },
  mounted () {
    const axios = require('axios');
    var self = this;

    axios.get("http://localhost:4000/api/workingtimes/"+this.$route.params.userID, {
                params : {
                  start : '',
                  end : ''
                }
              })
              .then(function(response) {
                console.log(JSON.stringify(response, null, 2));
                self.dataBack = response.data.data;
              })
              .catch(function (error) {  
                console.log(JSON.stringify(error, null, 2));
              });
  },
  methods: {
    createWorkingTime: function() {

    },

    updateWorkingTime() {

    },

    deleteWorkingTime: function(element) {
      const axios = require('axios');

      axios.delete("http://localhost:4000/api/workingtimes/"+element)
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
