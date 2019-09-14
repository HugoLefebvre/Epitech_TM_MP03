export default {
  name: 'working-times',
  components: {},
  props: [],
  data () {
    return {
      dataBack:""
    }
  },
  computed: {

  },
  mounted () {
    const axios = require('axios');

    var self = this;
    axios.get("http://localhost:4000/api/workingtimes", {
      params : {
        start : '',
        end : ''
      }
    }).then(function(response) {
          //console.log(JSON.stringify(response, null, 2));
          self.dataBack = response.data.data;
    }).catch(function (error) {
          //console.log(JSON.stringify(error, null, 2));
    });
  },
  methods: {
    redirectWorkingTime: function(index){
      this.$router.push('/working-time/' + this.dataBack[index].id)
      console.log(this.dataBack[index])

    }
  }
}
