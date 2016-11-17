<template lang='pug'>
  .app.flex-column
    .flex-column.fill.flex-center.title(v-if='!details')
      i.fa.fa-exclamation
      | No Details Specified
    .pages.flex-column.fill(v-if='details')
      .page.flex-column.fill
        .flex-column.fill
          .flex-row.flex-center.title {{details.name}}
          .flex-row.personal-info.flex-center.grey-text-light
            i.fa.fa-home
            .space-right {{details.address}}
            i.fa.fa-envelope.space-left
            .space-right {{details.email}}
            i.fa.fa-phone.space-left
            | {{details.phone}}
          hr.fading
          .flex-row-flow.flex-center.grey-text-light.skills
            .flex-row.flex-center-align.skill(v-for='(skill,i) in details.skills')
              i.fa.fa-circle.space-left.tiny(v-if='i != 0 && skill !== "Python" && skill !== "Infrastructure design"')
              span(v-if='i % 2 == 0') {{skill}}
              span(v-if='i % 2 == 1') {{skill}}
          hr.fading
          .heading.flex-row.flex-center Professional Profile
</template>
<script>
  export default {
    props: {
      details: {
        type: Object,
        required: true
      }
    },
    data() {
      return {

      }
    }
  }
</script>
