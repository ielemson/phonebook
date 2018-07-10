<template>
<!-- //to make the modal active we include the class is-active in the modal div -->
<div class="modal" :class="openmodal">
<div class="modal-background"></div>
<div class="modal-card">
<header class="modal-card-head">
<p class="modal-card-title">Update {{list.name}}'s Details</p>
<button class="delete" aria-label="close" @click = "close"></button>
</header>
<section class="modal-card-body">

<div class="field">
<p class="control has-icons-left has-icons-right">
<input class="input" :class = "{'is-danger':errors.name}" type="name" placeholder="Name" v-model="list.name">
<span class="icon is-small is-left">
<i class="fa fa-user"></i>
</span>
<span class="icon is-small is-right">
<i class="fa fa-check"></i>
</span>
</p>
<small v-if="errors.name" class="has-text-danger">{{errors.name[0]}}</small>
</div>


<div class="field">
<p class="control has-icons-left has-icons-right">
<input class="input" :class="{'is-danger':errors.email}" type="email" placeholder="Email" v-model="list.email">
<span class="icon is-small is-left">
<i class="fa fa-envelope"></i>
</span>
<span class="icon is-small is-right">
<i class="fa fa-check"></i>
</span>
</p>
<small v-if="errors.email" class="has-text-danger">{{errors.email[0]}}</small>
</div>


<div class="field">
<p class="control has-icons-left">
<input class="input" :class="{'is-danger':errors.phone}" type="number" placeholder="Phone" v-model="list.phone">
<span class="icon is-small is-left">
<i class="fa fa-phone"></i>
</span>
</p>
<small v-if="errors.phone" class="has-text-danger">{{errors.phone[0]}}</small>
</div>


</section>
<footer class="modal-card-foot">
<button class="button is-success" @click="update"> Update</button>
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
    list:'',
    errors:{}
    }
},
methods:{
close(){
this.$emit('closeRequest');
},

update(){   //ES6 Syntax
axios.put(`/phonebook/${this.list.id}`,this.$data.list).then((response)=>this.close())
.catch((error)=>this.errors = error.response.data.errors)
}

}
}
</script>

