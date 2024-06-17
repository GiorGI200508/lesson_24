
const index = "http://localhost:3000/"
async function getData(){
    let postList = await fetch( index + 'posts' )
    postList = await postList.json()
    console.log(postList);

}
let postObject = {
    "id": "1",
    "title": "a title",
    "views": 100
}

async function postData(){
    fetch(index + 'posts', {
        method:"POST",
        body:JSON.stringify(postObject)
    })
    

}
let postObject2 = {
    "title": "my old title"
}

async function updateData(id){
    fetch(index + "posts/" + id,{
        method:"PATCH",
        body:JSON.stringify(postObject2)
    })

}

async function deleteData(id){
    fetch(index + "posts/" + id,{
        method:"DELETE"
    })
}

deleteData(1)

// postData()


// updateData(1)


getData()