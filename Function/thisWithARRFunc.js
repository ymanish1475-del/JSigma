const student ={
    name:"manish yadav",
    mark:98,
    prop:this,
    getName:function(){
        console.log(this)
        return this.name;
    },
    getMark:()=>{
        console.log(this)
        return this.mark;
    }
}