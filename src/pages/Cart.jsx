import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import Table from 'react-bootstrap/Table';
import { Clear, deletefromcart } from '../../rtk/Slices/CartSlice';
import { Container} from 'react-bootstrap';

function Cart() {



  const redirectToCheckout = async () => {
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessions', {
      items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      })),
    });

    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };





  const cart = useSelector(state=>state.cart)

  const totalprice =cart.reduce(
    (acc, cart) => {acc += cart.price * cart.quantity
    return acc
    }
  ,0);
console.log()

  const dispatch = useDispatch()


  return (
    <div >
{cart.length>0?(
  <div className='' style={{padding:"30px"}} >
  <Table striped bordered hover variant="light" style={{marginTop:50 }}  className='w-[80%] '>
  <thead >
    <tr  >
      <th></th>
      <th>price</th>
      <th>Quant</th>
    </tr>
  </thead>
  <tbody>
  {cart.map((item)=>(
    <tr key={item.id} className="border-t-2 border-red-500 border-solid">

    <td style={{ width: '5%', padding:'10' }} ><img style={{ width: '100%' }} src={item.image} /></td>
    <td style={{ width: '10%' , padding:'0' ,textAlign:'center' }} >{item.price} $</td>
    <td style={{ width: '10%', padding:'0' ,textAlign:'center'  }} >{item.quantity} </td>
    <td style={{ width: '3%', padding:'5px 0px' ,textAlign:'center' }}  ><button className=" bg-slate-400 rounded-3xl    hover:bg-black py-1 px-2 hover:text-white font-bold duration-500"  onClick={()=>{dispatch(deletefromcart(item.id))}}> X</button></td>

  </tr>

  ))}

  </tbody>
</Table>
<p className=' m-auto mt-10 mb-10 flex justify-center bg-slate-400 rounded-3xl py-1 px-6 w-fit uppercase hover:bg-black hover:text-white font-bold duration-500'>total price ({totalprice.toFixed(2)}$) </p>
<button className='m-auto mt-10 mb-10 flex justify-center bg-slate-400 rounded-3xl py-1 px-6 w-fit uppercase hover:bg-black hover:text-white font-bold duration-500' onClick={()=>dispatch(Clear())}>Clear</button>

  </div>
):(<div className=' mr-[-75px] mt-[-37.5px] ' style={{position:'absolute' ,top:"50%",left:"50%" ,translate:"-50%"  }}>
  <h2 className=' text-center font-bold text-4xl  bg-slate-400 rounded-3xl py-1 px-6 w-fit uppercase hover:bg-black hover:text-white  duration-500'>try buy something</h2>
  </div>)}


    </div>
  )
}
export default Cart