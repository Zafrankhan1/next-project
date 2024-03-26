function Docs({params}:{
    params : {
        slug:string[]
    }
}) {
    if(params.slug.length===1){
  return (
    <div>Docs home page {params.slug[0]}</div>

  )
    }else if (params.slug.length===2){
        return (
            <h1>How are you {params.slug[2]}</h1>
        )
    }else {
        return (
        
            <h1>You are so sweet</h1>
        )
    }
}

export default Docs;