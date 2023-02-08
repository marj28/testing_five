<template>
    <div>
         <!-- student -->

         <v-col>
            {{message}}
         </v-col>
       
    </div>
</template>
<script>

export default {
    props: {
        message: {
            type: String,
            default: ""
        } 
    }
}
</script>
