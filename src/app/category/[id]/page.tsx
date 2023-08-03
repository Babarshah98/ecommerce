
// const getdata=(item:string)=>{
//   return  products.filter(product=> product.item ==='item')
// }

export default function Page({ params }:{params:{id:string}}){
    // const result= getdata(params.id);
    return(
        <div>
            My category {params.id}
        </div>
    )
}