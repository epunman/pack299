<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Chartered by <a href="http://stevenspointumc.org/" target="_blank" rel="noopener">Saint Paul's United Methodist Church</a> 600 Wilshire Blvd Stevens Point, WI
    </p>
    <h3>Events</h3>
    <ul>
      <!-- <li><a href="https://www.scoutbook.com/mobile/dashboard/calendar/event.asp?EventID=2439006" target="_blank" rel="noopener">Pack Meeting 9/17/19 6:30pm</a></li>
      <li><a href="https://www.scoutbook.com/mobile/dashboard/calendar/event.asp?EventID=2439203" target="_blank" rel="noopener">Webelos Fall Adventure 9/20/19-9/22/19</a></li> -->
      <li><a href="https://docs.google.com/document/d/1OXD9YnCUTupCrfO7rTAY_mS9K392yU1RqawAxZm4oVU/edit?usp=sharing" target="_blank" rel="noopener">SuperTrip to Mall of America Aquarium</a></li>
    </ul>
    <h3>Formalities</h3>
    <ul>
      <li><a href="https://docs.google.com/document/d/1C1AkoLoxtr2BhEoArkRUiCi8oPV9QwKEyYWBqYQoQPg/edit?usp=sharing" target="_blank" rel="noopener">By-Laws</a></li>
      <!-- <li><a href="https://google.com" target="_blank" rel="noopener">Dues</a></li> -->
      <li><a href="https://www.scouting.org/programs/cub-scouts/cub-scout-uniform/" target="_blank" rel="noopener">Uniforms</a></li>
    </ul>
    <h3>Tools</h3>
    <ul>
      <li><a href="https://docs.google.com/document/d/17Dodjr9mJcCv2Uow61wxoqbGCRBnL8BMTcPh-rWhVO0/edit?usp=sharing" target="_blank" rel="noopener">Youth Protection Training</a></li>

      <li><a href="https://www.scoutshop.org/" target="_blank" rel="noopener">Online Scout Shop</a></li>
      <li><a href="https://docs.google.com/document/d/1-9RZQRIt9zYCuC0VQMO7eOVBTnQGsh_USJ5GobRvVk4/edit?usp=sharing" target="_blank" rel="noopener">HuTerra Fundraiser</a></li>
      <!-- <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">Scouter Terminology</a></li> -->
      <li><a href="https://paypal.me/pack299?locale.x=en_US" target="_blank" rel="noopener">Pack Paypal</a></li>
      <li><a href="https://salecalc.com/paypal" target="_blank" rel="noopener">Calculate Paypal Convenience Fee</a></li>
    </ul>
    <h3>Communication</h3>
    <ul>
      <li><a href="https://www.scoutbook.com/" target="_blank" rel="noopener">Scoutbook</a></li>
      <li><a href="https://docs.google.com/document/d/1vVM2PZomGcLZR2ZSEDbMJfIe1pkDyAlA3yeLEiAqqt8/edit?usp=sharing" target="_blank" rel="noopener">How To RSS Feed</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
