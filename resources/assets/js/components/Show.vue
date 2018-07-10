<template>
    <div class="modal" :class="openmodal">
    <div class="modal-background"></div>
    <div class="modal-card">
    <header class="modal-card-head">
    <p class="modal-card-title">{{list.name}}'s details</p>
    <button class="delete" aria-label="close"  @click ="close"></button>
    </header>
    <section class="modal-card-body">

            <p><label>Name:&nbsp;</label>&nbsp;{{list.name}}</p><hr/>
            <p><label>email:&nbsp;</label>&nbsp;{{list.email}}</p><hr/>
            <p><label>Phone:&nbsp;</label>&nbsp;{{list.phone}}</p>

    </section>
    <footer class="modal-card-foot">
    <button class="button is-danger" @click ="close">Close</button>
    </footer>
    </div>
    </div>
</template>


<script>
export default{
    props:['openmodal'],
    
       data(){
    return{
    list:''
        }
},
    methods:{
    close(){
    this.$emit('closeRequest');
    }
    }
 
    }
</script>