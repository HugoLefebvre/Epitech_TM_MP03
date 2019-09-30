import EditUser from "../EditUser/index";
import Users from "../Users/index";

export default {
  name: 'user-menu',
  components: {
    EditUser,
    Users
  },
  props: [],
  data () {
    return {
      userId:'',
      currentPart:'1'
    }
  },
  computed: {
  },
  mounted () {
    if(localStorage.IdUser) this.userId = localStorage.IdUser
    var self = this
    $(".user_menu_left ul li").on("click", function(){
      $(".selected").removeClass("selected");
      $(this).addClass("selected")
      self.currentPart = $(this).data('id')
    });
  },
  methods: {

  }
}
