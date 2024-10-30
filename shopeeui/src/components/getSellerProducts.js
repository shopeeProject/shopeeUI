import sellerBackendService from "../backendservices/sellerBackendService";


function getSellerProducts(props){
    let sellerProducts = sellerBackendService.getSellerProducts();
    sellerProducts.then((response)=>{
        console.log(response)
    })
    console.log()
}
export default getSellerProducts;