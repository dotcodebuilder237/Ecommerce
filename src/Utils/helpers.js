export const formatprice = (number) =>{
    return new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format(number/100)
    
}
export const getUniqueValuesl = () =>{
    
}