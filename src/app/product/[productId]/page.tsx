
const persen = {
    name:'Zafran',
    age: 20,
    address: "Lahore"
};

const {name} = persen;
console.log('name', name);

const test = (params: any) => {
    console.log('params', params);
}

function page({params}:{
    params :{productId:string}
}) {
  return (
    <div>This is product id {params.productId}</div>
  )
}

export default page;