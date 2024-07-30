import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
const BtmFooter = () => {
  return (
    <>
       <div className='lg:flex justify-between my-6 p-3'>
            <div>
              <h1 className='border-b border-purple-500 pb-2 font-semibold text-[1.0625rem] mb-6'>Need any help?</h1>
              <div className='pl-3 border-l-[2px] border-purple-500'>
                <p className='text-[1.0625rem] font-semibold mb-1'>Call 24/7 for any help</p>
                <p className='text-purple-500 text-xl font-semibold cursor-pointer'>+00 123 456 789</p>
              </div>
              <div className='pl-3 border-l-[2px] border-purple-500 my-3'>
                <p className='text-[1.0625rem] font-semibold mb-1'>Mail to our support team</p>
                <p className='text-purple-500 text-xl font-semibold cursor-pointer'>support@domain.com</p>
              </div>
              <div className='pl-3 border-l-[2px] border-purple-500'>
                <p className='text-[1.0625rem] font-semibold mb-1'>Follow us on</p>
                <span><FacebookOutlinedIcon style={{color:"#8b3eea",cursor:"pointer"}}/> <InstagramIcon style={{color:"#8b3eea",cursor:"pointer"}}/></span>
              </div>
            </div>
            <div>
              <h1 className="border-b border-purple-500 pb-2 font-semibold text-[1.0625rem]">Company</h1>
             <ul className='mt-6'>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link to=''>Home</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link to='/about'>About us</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link to='pages'>Pages</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link to='contact'>Contact</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link to=''>Meet the Team</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link to=''>Work with Us</Link> </li>
             
             </ul>
            </div>
            <div>
              <h1 className="border-b border-purple-500 pb-2 font-semibold text-[1.0625rem]">Support</h1>
             <ul className='mt-6'>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Account</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >FAQ</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Legal</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Affiliate Program</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Privacy Policy</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Contact</Link> </li>
             </ul>
            </div>
            
            <div>
              <h1 className="border-b border-purple-500 pb-2 font-semibold text-[1.0625rem]">Other Services</h1>
             <ul className='mt-6'>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Community <br />Program</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Investor Relation</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Reward Program</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Partners</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >List My Hotel</Link> </li>
              
             </ul>
            </div>
            <div>
              <h1 className="border-b border-purple-500 pb-2 font-semibold text-[1.0625rem]">Top Cities</h1>
             <ul className='mt-6'>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Nanga Parbat</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Ansoo Lake</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Fairy Meadows</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Kaghan Valley</Link> </li>
              <li className='text-[1.0625rem] cursor-pointer hover:text-purple-500 my-2'><Link >Banjosa Lake</Link> </li>
             </ul>
            </div>
          </div> 
    </>
  )
}

export default BtmFooter
