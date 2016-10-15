<template>
<g :class='elClass' >

</g>
</template>

<script>
export default {
  props: {
    piece: {
      validator: function (value) {
        return new Set(['thaum','sciane','paupil']).has(value)
      }
    }
    faction: {
      validator: function(value) {
        return new Set(['red','green','blue']).has(value)
      }
    }
  }
  computed: {
    elClass: function () {
      return `piece ${piece} ${faction}`
    }
  }
}
</script>