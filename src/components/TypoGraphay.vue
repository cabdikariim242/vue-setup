<template>
    <div :class="CustomClass">
         {{ Msg }}
         

    </div>
  
</template>

<script>
export default {
    props: {
        CustomClass: {
            type: String,
            default: ''
        },
        Msg: {
            type: String,
            default: '',
        }
    }
}
</script>