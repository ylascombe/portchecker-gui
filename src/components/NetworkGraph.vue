<template>
  <div id="mynetwork">
  </div>
</template>

<script>
  import vis from 'vis'

  export default {
    name: 'NetworkGraph',
    data () {
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
    width: 100%;
    height: 600px;
    border: 1px solid lightgray;
  }

</style>
