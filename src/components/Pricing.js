import React, { Fragment, useState } from 'react'
import { useContext } from 'react'
import {FcCheckmark} from 'react-icons/fc'
import { Container } from './NavBar';
import '../Styles/Pricing.css'

function Pricing() {
  const {toggle} = useContext(Container)
  const [toggleBasic,setToggleBasic] = useState(true)
  const [toggleStandard, setToggleStandard] = useState(true)
  const [togglePremium, setTogglePremium] =useState(true)

  const [basicCost,setBasicCost] =useState("50")
  const [standardCost,setstandardCost] =useState("90")
  const [premiumCost,setpremiumCost] =useState("130")
  return (
    <Fragment>
      <div className={toggle ?'backgroun-Color-Main' : 'backgroun-Color-secondary'}>
        <div className='Pricing-container'>
          <div className={toggle ? 'Pricing-option1' : 'light-Theme1'}>
            <h2>Basic</h2>
            <div className='Price'>
              <h3>{basicCost}₹</h3><h4 id='MonthlyYearly'>{toggleBasic ? '/Monthly' : '/Yearly'}</h4>
            </div>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Unlimited films and tv programs</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Watch on Mobile phones & Tablets</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Cancel at anytime</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>First Month is Completely Free</span>
            <button id='button1'>Buy Now</button>
            <div id='darktheme'>
              <div className='Pricing-yearly-darktheme' onClick={()=>{
                setToggleBasic(!toggleBasic)
                if(toggleBasic){
                  setBasicCost("499")
                }else{
                  setBasicCost('50')
                }
              }}>
                <div className={toggleBasic ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
              </div>
            </div>
          </div>
          <div className={toggle ? 'Pricing-option2' : 'light-Theme2'}>
            <h2>standard</h2>
            <div className='Price'>
              <h3>{standardCost}₹</h3><h4 id='MonthlyYearly'>{toggleStandard ? '/Monthly' : '/Yearly'}</h4>
            </div>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Unlimited films and tv programs</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Watch on Mobile phones & Tablets</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Cancel at anytime</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>First Month is Completely Free</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>HD Available</span>
            <button id='button2'>Buy Now</button>
            <div id='darktheme'>
              <div className='Pricing-yearly-darktheme' onClick={()=>{
                setToggleStandard(!toggleStandard)
                if(toggleStandard){
                  setstandardCost("899")
                }else{
                  setstandardCost('90')
                }
              }}>
                <div className={toggleStandard ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
              </div>
            </div>
          </div>

          <div className={toggle ? 'Pricing-option2' : 'light-Theme2'}>
            <h2>Premium</h2>
            <div className='Price'>
              <h3>{premiumCost}₹</h3><h4 id='MonthlyYearly'>{togglePremium ? '/Monthly' : '/Yearly'}</h4>
            </div>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Unlimited films and tv programs</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Watch on Mobile phones & Tablets</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Cancel at anytime</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>First Month is Completely Free</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>HD Available</span>
            <span><FcCheckmark fontSize={25} id='checkmark'/>Ultra HD</span>
            <button id='button3'>Buy Now</button>
            <div id='darktheme'>
              <div className='Pricing-yearly-darktheme' onClick={()=>{
                setTogglePremium(!toggleStandard)
                if(toggleStandard){
                  setpremiumCost("1499")
                }else{
                  setpremiumCost('130')
                }
              }}>
                <div className={togglePremium ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Pricing
