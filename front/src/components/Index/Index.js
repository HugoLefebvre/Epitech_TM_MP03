import MenuComp from "../MenuComp/index"
import Connexion from "../Login/Connexion/index"

export default {
  name: 'index',
  components: {
      MenuComp,
      Connexion
  },
  props: [],
  data () {
    return {
      AccessKey:""
    }
  },
  computed: {
  },
  mounted () {
    if (localStorage.AccessKey) {
      this.AccessKey = localStorage.AccessKey;
    }
  },
  methods: {

  },
}
