function delay(time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("done")
        },time)
        
    })
}

class taskRunner{
    constructor(concurrency){
        this.pangingList=[]
        this.limit=concurrency
        this.currentCount=0
    }
    push(task){
        if(this.currentCount<this.limit){
            this.currentCount+=1
            this.execute(task)
        }else{
            this.pangingList.push(task)
        }
    }
    async execute(task){
        await task()
        if(this.pangingList.length){
            let remaining=this.pangingList.shift()
            this.currentCount-=1
            this.execute(remaining)
        }
        return
    }
}

const ex = new taskRunner(3)


const t1 = async () => { console.log('t1 started'); await delay(2000); console.log('t1 finished'); };
const t2 = async () => { console.log('t2 started'); await delay(1000); console.log('t2 finished'); };
const t3 = async () => { console.log('t3 started'); await delay(1500); console.log('t3 finished'); };
const t4 = async () => { console.log('t4 started'); await delay(1000); console.log('t4 finished'); };
const t5 = async () => { console.log('t5 started'); await delay(500); console.log('t5 finished'); };


ex.push(t1);  // Starts immediately
ex.push(t2);  // Starts immediately
ex.push(t3);  // Starts immediately
ex.push(t4);  // Waits until at least one task finishes
ex.push(t5); 