// import { DonutChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import { BarChart } from 'vue-morris'
import axios from 'axios'

export default {
  name: 'chart-manager',
  components: {
    // DonutChart, 
    LineChart, 
    BarChart,
  },
  props: [],
  data () {
    return {
      user_ID:'',

      //Line Chart Data 
      startTime: '', 
      endTime: '', 
      lineData : [], 
      xkey : 'lineDay', 
      ykeys :[], 
      labels :[], 
      lineColors :[],
      xlabelangle: '90',
      xLabels: 'day',
      xLabelFormat:function(x) {        
        return x.toDateString();
      },

      //Bar Chart Data
      startTimeBar: '', 
      endTimeBar: '', 
      barData : [], 
      xkeyBar : 'barWeek', 
      ykeysBar :[], 
      labelsBar :[], 
      barColors :[],
      xlabelangleBar: '90',
      xLabelsBar: 'day',
      xLabelFormatBar:function(x) {        
        return x.toDateString();
      },
      
    }
  },
  computed: {

  },
  mounted () { 
    var self = this; 
    //Init user ID
    self.user_ID = localStorage.IdUser;

    self.setLineChart(); 
    self.setBarChart(); 
    
  },
  methods:{

    pad: function(number){
      var str = number;
      if (number<10){
        str = '0'+number;
      }
      return str;
    },

    getWeekNumber: function(d) {   //d has to be Date format
      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
      var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
      var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
      return weekNo;
    },

    setBarChart: function(){
      var self = this; 

      self.endTimeBar = new Date; 
      self.startTimeBar = new Date(new Date().getFullYear(), 0, 1);

      var Stime = self.startTimeBar.getFullYear() + '-' + self.pad(self.startTimeBar.getMonth()+1) + '-' + 
      self.pad(self.startTimeBar.getDate()) + '+' + '00:00:00'

      var Etime = self.endTimeBar.getFullYear() + '-' + self.pad(self.endTimeBar.getMonth()+1) + '-' + 
      self.pad(self.endTimeBar.getDate()) + '+' + self.pad(self.endTimeBar.getHours()) + ':' + 
      self.pad(self.endTimeBar.getMinutes()) + ':' + self.pad(self.endTimeBar.getSeconds());

      console.log(Stime); 
      console.log(Etime);

      axios({
        method: 'get',
        url: 'http://localhost:4000/api/workingtimes/'+ self.user_ID + '?start=' + Stime + '&end=' + Etime,
        headers: {
          'Authorization': 'Bearer ' + localStorage.AccessKey
        }
      })
      .then(function (response) {
        var data = response.data.data;
        var tot;
        var obj;

        var i = 0;
        for (i = 0; i < data.length; i++) {
          if(i>0 && self.getWeekNumber(new Date(data[i].start)) == self.getWeekNumber(new Date(data[i-1].start))){
            tot += Math.abs(new Date(data[i].end) - new Date(data[i].start))/(1000 * 60 * 60);
            self.barData.pop(); 
          } 
          else{
            tot = Math.abs(new Date(data[i].end) - new Date(data[i].start))/(1000 * 60 * 60);
          }
          obj = { barWeek: 'Week ' + self.getWeekNumber(new Date(data[i].start)), a: tot};
          self.barData.push(obj); 
        }
        self.ykeysBar.push('a');
        self.labelsBar.push('Working Time');
        self.barColors.push('#FF6384');
        console.log('BARCHART C ICI'); 
        console.log(self.barData);
      })
      .catch(function (error) {
        console.log(error);
      });
      

    },

    setLineChart: function(){
    var self = this;
    self.endTime = new Date; 
    self.startTime = new Date; 
    self.startTime.setDate(self.startTime.getDate() - 7);
    
    var Stime = self.startTime.getFullYear() + '-' + self.pad(self.startTime.getMonth()+1) + '-' + 
    self.pad(self.startTime.getDate()) + '+' + '00:00:00'

    var Etime = self.endTime.getFullYear() + '-' + self.pad(self.endTime.getMonth()+1) + '-' + 
    self.pad(self.endTime.getDate()) + '+' + self.pad(self.endTime.getHours()) + ':' + 
    self.pad(self.endTime.getMinutes()) + ':' + self.pad(self.endTime.getSeconds());
    
    axios({
      method: 'get',
      url: 'http://localhost:4000/api/workingtimes/'+ self.user_ID + '?start=' + Stime + '&end=' + Etime,
      headers: {
        'Authorization': 'Bearer ' + localStorage.AccessKey
      }
    })
    .then(function (response) {
      var data = response.data.data;
      var tot;
      var obj;

      //Setting line chart data 
      var i = 0;
      for (i = 0; i < data.length; i++) {
        if (i>0 && data[i].start.substring(0,10) == data[i-1].start.substring(0,10)){
          tot += Math.abs(new Date(data[i].end) - new Date(data[i].start))/(1000 * 60 * 60);
          self.lineData.pop(); 
        }
        else{
          tot = Math.abs(new Date(data[i].end) - new Date(data[i].start))/(1000 * 60 * 60);
        }
        obj = {lineDay: data[i].start.substring(0,10).toString(), a: tot};
        self.lineData.push(obj); 
      }
      self.ykeys.push('a');
      self.labels.push('Working Time');
      self.lineColors.push('#FF6384');
      })
      .catch(function (error) {
        console.log(error);
      });
    }



  }
}


      // donutData: [
      //   { label: 'Car', value: 40 },
      //   { label: 'Motorcycle', value: 150 },
      //   { label: 'airplane', value: 100 }
      // ],  
      // arrayColors:[ "#FF6384", "#73c000", "#FFCE56" ], 