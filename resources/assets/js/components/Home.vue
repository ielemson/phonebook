<template>

<div>
<nav class="panel column is-offset-2 is-8">

<p class="panel-heading">
Phone-book
<!-- @click is equivalent to onclick in jquery and it is a method -->
<button class="button is-link is-outlined" @click = "openAdd"> Add New </button>

<span class="is-pulled-right" v-if="loading"><i class="fa fa-spinner fa-spin fa-2x fa-fw"></i></span>
</p>


<div class="panel-block">
<p class="control has-icons-left">
<input class="input is-small" type="text" placeholder="search">
<span class="icon is-small is-left">
<i class="fa fa-search" aria-hidden="true"></i>
</span>
</p>
</div>

<a class="panel-block" v-for="item , key in lists">
<span class="column is-9">
{{item.name}}
</span>
<span class="panel-icon column is-1">
<i class="has-text-danger fa fa-trash" aria-hidden="true" @click="del(key,item.id)"></i>
</span>
<span class="panel-icon column is-1">
<i class="has-text-info fa fa-edit" aria-hidden="true" @click="openUpdate(key)"></i>
</span>
<span class="panel-icon column is-1">
<i class="has-text-success fa fa-eye" aria-hidden="true" @click="openShow(key)"></i>
</span>
</a>
</nav>
<!-- props is used to pas variable to oda page tru the view -->
<Add :openmodal ='addActive' @closeRequest='close'></Add>
<Show :openmodal ='showActive' @closeRequest='close'></Show>
<Update :openmodal ='updateActive' @closeRequest='close'></Update>
</div>
</template>

<script>
let Add = require('./Add.vue');
let Show = require('./Show.vue');
let Update = require('./Update.vue');
    
export default{
components:{Add,Show,Update},
data(){
return{
addActive : '',
showActive : '',
updateActive : '',
lists:{},
errros:{},
    loading:false,
}
},

mounted(){
axios.post('/getData')
.then((response)=>this.lists = response.data)
.catch((error)=>this.errors = error.response.data.errors)
},
    
    
methods:{
openAdd(){
this.addActive = 'is-active';
},
    
openShow(key){
this.$children[1].list = this.lists[key]
this.showActive = 'is-active';
},
    
openUpdate(key){
this.$children[2].list = this.lists[key]
this.updateActive = 'is-active';
},
    
del(key,id){
//console.log(`${key} ${id}`)
    this.loading = !this.loading
if(confirm("Are you sure to delete ?")){

axios.delete(`/phonebook/${id}`)
.then((response)=>{this.lists.splice(key,1);this.loading = !this.loading})
.catch((error)=>this.errors = error.response.data.errors)
}

},
    
close(){
this.addActive = this.showActive = this.updateActive = ''

}
}
    
    
}
</script>
