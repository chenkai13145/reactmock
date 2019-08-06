export function formatDate(date){
    let data=new Date(date)
    let n=data.getFullYear()
    let y=(data.getMonth()+1).toString().padStart(2,'0')
    let r=data.getDay().toString().padStart(2,'0')
    let s=data.getHours().toString().padStart(2,'0')
    let f=data.getMinutes().toString().padStart(2,'0')
    let m=data.getSeconds().toString().padStart(2,'0')
   return `${n}-${y}-${r} ${s}:${f}:${m}`
}