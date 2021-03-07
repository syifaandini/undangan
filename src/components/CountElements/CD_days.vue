
<template slot="countdown" slot-scope="scope">
<!-- :end-time="1616778000"  -->
<vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2018-10-10 00:00:00'"
      :end-time="1616778000" 
      :interval="1000"
      :start-label="''"
      :end-label="''"
      label-position="begin"
      :end-text="'Event ended!'"
      :day-txt="'Days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
      
      <template slot="start-label" slot-scope="scope">
        <span style="color: red" v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'begin'">{{scope.props.startLabel}}:</span>
        <span style="color: blue" v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'begin'">{{scope.props.endLabel}}:</span>
      </template>

<!-- timer disini -->
      <template slot="countdown" slot-scope="scope">
        <div class="bg-tm align-middle">
          <div class="num-tm mx-auto">{{scope.props.days}}</div> 
          <div class="text-tm mx-auto">{{scope.props.dayTxt}}</div>
        </div>
      </template>
 
      <template slot="end-label" slot-scope="scope">
        <span style="color: red" v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'end'">{{scope.props.startLabel}}:</span>
        <span style="color: blue" v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'end'">{{scope.props.endLabel}}:</span>
      </template>
 
      <template slot="end-text" slot-scope="scope">
        <span style="color: green">{{ scope.props.endText}}</span>
      </template>
  </vue-countdown-timer>
</template>
   
<script >
export default {
  name: 'CDdays',
  methods: {
    startCallBack: function(x) {
      console.log(x);
    },
    endCallBack: function(x) {
      console.log(x);
      this.$emit('endCD');
    },
  },
};
</script>


<style scoped>

@media screen and (max-width: 770px) {
    .bg{
      width: 80px !important; /*135*/ 
      height: 80px !important;
      background: #6399C7 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 10px;
      opacity: 1;
    }
    .num{
    font: normal normal bold 40px/53px Red Hat Display;
    }
    .text{
    font: normal normal normal 11px/14px Red Hat Display;
    }
}
@media screen and (max-width:1000px) {
  

}
.bg{
    width: 135px; /*135*/
    height: 135px;
    /* min-width: 83px;  */
    /* height: auto; */
    /* min-height: 83px; */
    background: #6399C7 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
    opacity: 1;
}
.num{
    padding-top: 15px;
    width: 92px;
    height: 86px;
    text-align: center;
    font: normal normal bold 65px/86px Red Hat Display;
    letter-spacing: 3.25px;
    color: #FFFFFF;
    opacity: 1;
}
.text{
    width: 100%;
    height: 50px;
    text-align: center;
    font: normal normal normal 20px/26px Red Hat Display;
    letter-spacing: 1.2px;
    color:#FFFFFF;
    opacity: 1;
}
</style>