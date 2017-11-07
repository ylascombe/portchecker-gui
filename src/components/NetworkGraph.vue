<template>
  <div id="mynetwork">
  </div>
</template>

<script>
  import vis from 'vis'

//  var nodes = {}
//  var edges = {}
//  var container = {}
//  var data = {}
//  var options = {}
//  var network = {}

  export default {
    name: 'NetworkGraph',
    data () {
      // create an array with nodes
//      this.nodes = new vis.DataSet([
//        {id: 1, label: 'Node 1'},
//        {id: 2, label: 'Node 2'},
//        {id: 3, label: 'Node 3'},
//        {id: 4, label: 'Node 4'},
//        {id: 5, label: 'Node 5'}
//      ])
//
//      // create an array with edges
//      this.edges = new vis.DataSet([
//        {from: 1, to: 3},
//        {from: 1, to: 2, color: '#FF0000', label: '80'},
//        {from: 1, to: 2, color: '#FF0000', label: '22'},
//        {from: 2, to: 4},
//        {from: 2, to: 5}
//      ])

      // create a network
      this.container = document.getElementById('mynetwork')

      // provide the data in the vis format
      this.data = {
        nodes: this.nodes,
        edges: this.edges
      }
      this.options = {}

      // initialize your network!
      /* eslint no-new: "error" */
      this.network = null // new vis.Network(container, data, options)

      return {
        nodes: this.data.nodes,
        edges: this.data.edges,
        options: this.options,
        container: this.container,
        network: this.network
      }
    },

    computed: {
      graph_data () {
        return {
          nodes: this.nodes,
          edges: this.edges
        }
      }
    },

    created () {
      this.loadData()
    },

    mounted: function () {
      // do your viz setup here
      // network = new vis.Network(this.$el, this.data, this.options)
    },

    methods: {
      loadData () {
        // return this.$http.get(`${Config.baseURL}/teams/`).then((response) => {
        return this.$http.get('http://localhost:8090/v1/report/1/').then((response) => {
          console.log(response)
          this.nodes = new vis.DataSet(response.body.nodes)
          this.edges = new vis.DataSet(response.body.edges)

          this.container = document.getElementById('mynetwork')
          this.network = new vis.Network(this.container, this.graph_data, this.options)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #mynetwork {
    width: 600px;
    height: 400px;
    border: 1px solid lightgray;
  }

</style>
