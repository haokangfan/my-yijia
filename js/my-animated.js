(function(){
    var winHeight=document.documentElement.clientHeight;
    function  Move(ele) {
        this.top=$(ele).offset().top;
        console.log(this.top)
        // console.log(this.top)
        this.ele=$(ele);
        // this.moveName=moveName;
    }
    Move.prototype=new EventEmitter();
    Move.prototype.start=function (e) {
        this.y=this.top;
        // console.log(this.y,winHeight);
        if(this.y-$(window).scrollTop()+20<winHeight){
            this.fire("start",e);
        }
    }
    function EventEmitter() {
    }
    EventEmitter.prototype.on=function(type,fn) {
        if(!this["emte"+type]){
            this["emte"+type]=[];
        }
        var a=this["emte"+type];
        for (var i=0;i<a.length;i++){
            if(a[i]==fn)
                return this;
        }
        a.push(fn);
        return this;
    }
    EventEmitter.prototype.fire=function(type,e){
        var ary=this["emte"+type];
        if(ary){
            for(var i=0;i<ary.length;i++){
                if(typeof ary[i]=="function"){

                    ary[i].call(this,e);
                }
                else{
                    ary.splice(i,1);
                    i--;
                }
            }
        }
    }
    EventEmitter.prototype.off=function(type,fn){
        var a=this["emitter"+type];
        if(a){
            for(var i=0;i<a.length;i++){
                if(a[i]==fn){
                    a[i]=null;
                    return this;//为了实现链式写法
                }
            }
        }
        return this;//为了实现链式写法
    };
    window.Move=Move;
    
}(window,$,document));