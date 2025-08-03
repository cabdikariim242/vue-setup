<template>
    <label :class="labelClass" :for="id" >
        {{ label }}
        <span v-if="required">**</span>
    <slot></slot>
</label>
</template>

<script>
export default {
    props:{
        label:{
            type:String,
            default:''
        },
        labelClass:{
            type:String,
            default: ''
        },
        id:{
            type:String,
            default:''
        },
        required:{
            type:Boolean,
            default:true
        }
    }
}
</script>