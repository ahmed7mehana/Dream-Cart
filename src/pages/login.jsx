import { useSession ,signIn,signOut,getSession} from 'next-auth/react'
import React from 'react'
function login() {
//  <button onClick={()=>signIn()}>sign in</button>
    const{data:session}=useSession()
    if(!session){
        return(
            <div className=' !bg-red-400 h-full' style={{background:"aliceblue"}}>
            <div  style={{ backgroundImage: `url(https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb&w=1500)` }}
            className='w-full h-screen absolute top-0  bg-center bg-cover duration-500'>
            <div  className=' mr-[-75px] mt-[-37.5px] ' style={{position:'absolute' ,top:"50%",left:"50%" ,translate:"-50%"  }}>
            <button onClick={()=>signIn()}  className=" m-auto bg-white text-black rounded-3xl py-1 px-2  uppercase hover:bg-black hover:text-white font-bold duration-500" >sign in with Google</button>
            </div>
            </div>
            </div>
        )
        }else{
            return (
                <div>signin first</div>
              ) 
        }
     
        }

export default login


export const getServerSideProps=async(context)=>{
    const session = await getSession(context);
    if(session){
        return{
            redirect:{
                destination:'./account'
            }
        }
    }
    return{
      props:{session},
    }
    }



