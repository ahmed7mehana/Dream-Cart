import React from 'react'
import { useSession ,signIn,signOut,getSession} from 'next-auth/react'
import { useSelector } from 'react-redux';
import { AiOutlineShopping , AiOutlineHeart} from "react-icons/ai";

function account() {

const cart = useSelector(state=>state.cart)
const wishlist = useSelector((state)=>state.wishlist)

const totalprice =cart.reduce(
        (acc, cart) => {acc += cart.price * cart.quantity
        return acc
        }
     ,0);

const{data:session ,status}=useSession({required:true})

if(status === 'authenticated'){
    console.log(session)
    return (
        <div style={{position:"absolute",top:"10%",padding:"20px"}} className="w-full flex flex-wrap flex-col justify-center items-center">

<div className=' border sm:w-[50%] !border-red-600 rounded p-3 mb-10' style={{width:""}}>
<div >
<img src={session.user.image} alt='img' className='w-[200px] h-[200px]  m-auto rounded-full'/>
<p className=' text-[23px] text-center'> {session.user.name}</p>
<p className=' text-sm text-center'> {session.user.email}</p>
</div>


</div>
        
        
<div className='w-full p-3 mb-10 '>
<h1 className='text-center font-bold'>All transactions within the application</h1>
<div className='mt-5'>
<p className=' uppercase font-semibold'>total Price :  ({totalprice.toFixed(2)}$) </p>
<p className=' uppercase font-semibold flex flex-wrap items-center'>item in your cart : {cart.length}  <AiOutlineShopping/> </p>
<p className=' uppercase font-semibold flex flex-wrap items-center'>item in your WishList :  {wishlist.length}  <AiOutlineHeart/> </p>

</div>
</div>



<button onClick={()=>{signOut()}} className=" m-auto bg-white text-black rounded-3xl py-1 px-2  uppercase hover:bg-black hover:text-white font-bold duration-500">signOut</button>
        </div>
      ) 
}else{
    return (
        <div>signin first</div>
      ) 
}

}
export default account;


export const getServerSideProps=async(context)=>{
    const session = await getSession(context);
    if(!session){
        return{
            redirect:{
                destination:'./login'
            }
        }
    }
    return{
      props:{session},
    }
    }


