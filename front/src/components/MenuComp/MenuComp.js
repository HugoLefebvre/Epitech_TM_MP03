export default {
  name: 'menucomp',
  components: {},
  props: [],
  data () {
    return {
        Username:''
    }
  },
  computed: {

  },
  mounted () {
    if(localStorage.Username){
        this.Username = localStorage.Username;
    }
  },
  methods: {
      disconnectUser: function(){
          window.localStorage.removeItem('AccessKey');
          window.localStorage.removeItem('IdUser');
          window.localStorage.removeItem('Role');
          window.localStorage.removeItem('Username');
          window.localStorage.removeItem('Email');
          this.$parent.AccessKey = "";
          this.$router.push("/");
      }
  }
}
