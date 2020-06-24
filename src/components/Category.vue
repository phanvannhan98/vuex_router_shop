<template>
  <div class="panel panel-default" @click.prevent="setCateActived(cate.id)">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a href="#">{{ cate.name }}</a>
      </h4>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    cate: { type: Object, required: true }
  },
  methods: {
    ...mapActions('cateActived', ['setCateActived'])
  }
}
</script>
