export default {
  name: 'menucomp',
  components: {},
  props: [],
  data () {
    return {
        Username:'',
        userRole:'',
        userId:''
    }
  },
  computed: {

  },
  mounted () {
      if(localStorage.Role) this.userRole = localStorage.Role
      if(localStorage.IdUser) this.userId = "/user/edit-user/" + localStorage.IdUser
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
