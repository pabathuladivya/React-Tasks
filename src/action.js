const AddProduct = (value) => async dispatch =>{
    dispatch({
        type : "ADD",
        payload : value
    })
}
const RemoveProduct = (value) => async dispatch =>{
    dispatch({
        type : "REMOVE",
        payload : {name:value}
    })
}
export default (AddProduct,RemoveProduct)