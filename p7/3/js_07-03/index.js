// const createPost = (title, text = 'Default text', date = new Date().toLocaleDateString()) => {
//   return {title,text,date}
// }

// const post = createPost('Скоро новый год!')
// console.log(post)

const createPost =(title,text = 'dddddddddddddddddd',date=new Date().toLocaleDateString())=>{
//date = date || new Date().toLocaleDateString()
return{
  title:title,
  text:text,
  date:date
}
}

const post = createPost('fffffffff','aaaaaaaaaaaaaaaa',)

console.log(post)