import React, { useRef } from 'react'
import Image from 'next/image'
import styles from '../styles/Item.module.css'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect, forwardRef } from 'react'



function Item2(props, ref) {


  //hotquantity
  const [hot, sethot] = useState(0);
  //coldquantity
  const [cold, setcold] = useState(0);
  //hot item price
  const [hotprice, sethotprice] = useState(props.price)
  //cold item price
  const [coldprice, setcoldprice] = useState(props.price)
  //milk option for specific hot item
  const [hotmilk, sethotmilk] = useState('')
  //milk option for  specifi cold item
  const [coldmilk, setcoldmilk] = useState('')
  //total price for specific hot item
  const [hottotal, sethottotal] = useState(0)
  //total price for specific cold item
  const [coldtotal, setcoldtotal] = useState(0)
  //total price for specific item
  const [total, settotal] = useState(0)
  //item price 
  const [item_price, setitem_price] = useState(props.price)
  //cold milk option +1 or +0
  const [milk, setmilk] = useState(0)
  //hot milk option +1 or +0
  const [milk1, setmilk1] = useState(0)
  //regular or small
  const [aa, setaa] = useState('')

  const[text,settext] = useState( {summary:'',hot:'',price:'',hottotal:''})
  const[text2,settext2] = useState( {summary2:'',cold:'',price2:'',coldtotal:''})

//when size changed in parent component, item price change too.
useEffect(()=>{
  setaa(props.size)
  if(props.size=="Regular"){
    setitem_price(props.price)  

  }
  else if(props.size=="Small"){
    setitem_price(props.price2)

  }

},[props.size])

//when item price changed, hot item price, cold item price, hot item total price, cold item total price change too.
useEffect(()=>{
  sethotprice(item_price+milk1)
  setcoldprice(item_price+milk)
  sethottotal((item_price+milk1)*10000*hot/10000)
  setcoldtotal((item_price+milk)*10000*cold/10000)


},[item_price])

// console.log(text)
// console.log(text2)

// console.log(hot)
// console.log(cold)

if(hottotal<0){
  sethottotal(0)
}
if(coldtotal<0){
  setcoldtotal(0)
}


//total can only above 0
useEffect(()=>{
  if(total<0){
    settotal(0)
  }
},[total])



//hot quantity between 0-100
  useEffect(()=>{
    if(hot==''){
      sethot(0)
    }
    if(parseInt(hot)>100){
      sethot(100)
    }
    else if(parseInt(hot)<1){
      sethot(0)
      settotal((coldprice*10000)*(cold)/10000)
    }
  },[hot])

//cold quantity beetween 0-100
  useEffect(()=>{
    if(parseInt(cold)>100){
      setcold(100)
    }
    else if(parseInt(cold)<1){
      setcold(0)
      settotal((hotprice*10000)*(hot)/10000)
    }
  },[cold])


//set summary1 and summary3 in parent component
  useEffect(()=>{
    if(hot>0){
       settext({
         summary:`Hot ${props.product} ${hotmilk} x ${hot}  =  $ ${parseFloat(hottotal).toFixed(2)}`,
         hot:`Hot ${props.product} ${hotmilk} x ${hot}`,
         price1:`$ ${parseFloat(hottotal).toFixed(2)}`,
         hottotal:hottotal

        })
     }
     else if(hot<=0){
      settext({
        summary:"",
        hot:"",
        price1:"",
        hottotal:hottotal

       })
     }

     if(cold>0){
      settext2({

        summary2:`Iced ${props.product} ${coldmilk} x ${cold}  =  $ ${parseFloat(coldtotal).toFixed(2)}`,
        cold:`Iced ${props.product} ${coldmilk} x ${cold}`,
        price2:`$ ${parseFloat(coldtotal).toFixed(2)}`,
        coldtotal:coldtotal
       })

     }
     else if(cold<=0){
      settext2({
        summary2:"",
        cold:"",
        price2:"",
        coldtotal:coldtotal
       })
     }
     

    let items = props.summary1
    let google= props.summary3


    let clone = [...items]
    let clone2 = [...google]

    let item1 = {...clone[Number(props.num-1)]}
    item1.total = hottotal+coldtotal
    item1.hottotal = hottotal
    item1.coldtotal = coldtotal
    item1.colditem = `Iced ${props.product}`
    item1.hotmilk = hotmilk
    item1.coldmilk = coldmilk
    item1.hotqant = hot
    item1.coldqant = cold
    clone[Number(props.num-1)] = item1
    //  console.log(clone)
     props.changesummary(clone)

     let google2 = {...clone2[Number(props.num-1)]}
     if(hot!=0){
       
      google2.summary =`Hot ${props.product} ${hotmilk} x ${hot}  =  $ ${parseFloat(hottotal).toFixed(2)}`
      google2.price1 =  `$ ${parseFloat(hottotal).toFixed(2)}`
      google2.hot = `Hot ${props.product} ${hotmilk} x ${hot}`
     }
     else if(hot<=0){
      google2.summary =""
      google2.price1 =""
      google2.hot = ""
     }

     if(cold!=0){
      google2.summary2 = `Iced ${props.product} ${coldmilk} x ${cold}  =  $ ${parseFloat(coldtotal).toFixed(2)}`
      google2.price2 = `$ ${parseFloat(coldtotal).toFixed(2)}`
      google2.cold = `Iced ${props.product} ${coldmilk} x ${cold}`
     }
     else if(cold<=0){
      google2.summary2 = ""
      google2.price2 = ""
      google2.cold = ""
     }

    clone2[Number(props.num-1)] = google2
     props.setgooglesheet(clone2)
  
},[coldtotal,hottotal,hotmilk,coldmilk,total])


  return (
    <div className='mt-1 mb-2 col-11 mx-auto row'> 
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>        
      </Head>
    
          <div ref={ref} style={{display:"none"}} >
                <div>{text.hot},{text.price1},{text.hottotal},</div>
                <div>{text2.cold},{text2.price2},{text2.coldtotal}</div>

          </div>

        <div className="accordion col-12" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id={props.accordion3}>
              <button className="accordion-button collapsed d-flex flex-row justify-content-right align-items-center col-12" type="button" data-bs-toggle="collapse" data-bs-target={props.accordion2} aria-expanded="false" aria-controls={props.accordion}>
                
                  <div className={styles.picture}>
                    <Image
                    src={props.pic}
                    alt={props.product}
                    width={50}
                    height={50}
                    layout='fixed'
                    className={styles.pic}
                    />
                  </div>
                  <div className='d-flex flex-column col-8  justify-content-between'>
                    <div>{props.product}</div>
                    <small className='text-secondary' >{props.size} ${props.size=="Regular" ? parseFloat(props.price).toFixed(2) : parseFloat(props.price2).toFixed(2)}</small>
                  </div>

              </button>
            </h2>
            <div id={props.accordion} className="accordion-collapse collapse" aria-labelledby={props.accordion3} data-bs-parent="#accordionExample">
              <div className="accordion-body d-flex flex-column ">
                  <div className='d-flex flex-row col-12 justify-content-left mt-2 mb-1  mx-auto row ' >
                      <small className={styles.detail}>{props.discription}</small>
                      {props.icelevel?
                      <div className='col-12 mt-2 '>
                      <div className='d-flex flex-row col-12 align-items-center mt-1'>
                        <small ><strong>Hot</strong> </small>
                        <div className='d-flex flex-row stepper col-3 mx-3'>
                            <span 
                            className={styles.inputnumberdecrement } 
                            onClick={
                              ()=>{if(hot>0){sethot(hot-1); 
                              settotal((hotprice*10000*(hot-1)+coldprice*10000*cold)/10000); 
                              sethottotal(hotprice*10000*(hot-1)/10000)}
                              else{
                                sethot(0)
                                settotal((coldprice*10000*cold)/10000); 
                                sethottotal(0)
                              }
                              // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}>
                              –
                            </span>
                            <input 
                            type="number" 
                            id={props.id} 
                            name={props.googleformqant} 
                            value={hot} 
                            className='form-control' 
                            onChange={(e)=>{
                            sethot(parseFloat(e.target.value));
                            settotal((hotprice*10000*(e.target.value)+coldprice*10000*cold)/10000); 
                            sethottotal(hotprice*10000*(e.target.value)/10000)}}
                            />
                            <span 
                            className={styles.inputnumberincrement} 
                            onClick={
                              ()=>{sethot(hot+1);
                             settotal((hotprice*10000*(hot+1)+coldprice*10000*cold)/10000);
                             sethottotal(hotprice*10000*(hot+1)/10000)

                            //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                             }}>
                             +
                             </span>
                        </div>

                          <div className='d-flex flex-row col-12  mt-1'>
                          <small className='text-secondary mx-2' >${parseFloat(hottotal).toFixed(2)}</small>
                          <input type="text" style={{display:"none"}} name={props.googleformamount} value={hottotal}/>
                          </div>
                        
                      </div>
                      



                      {
                      props.milk?
                      <div className='d-flex flex-column col-12 align-items-start mt-3'>
                      <small ><strong>Milk </strong> </small>
                      <div className='d-flex flex-row'>
                      <small className='text-secondary' >
                      {/*   <input type="radio" id="(No Milk)" name={props.googleformmilk} value="No Milk"  onChange={(e)=>{sethotprice(Number(item_price)+0);sethottotal((Number(item_price)+0)*10000*hot/10000);sethotmilk(e.target.id); settotal((Number(item_price)+0)*10000*(hot)/10000+coldprice*10000*cold/10000)}}/>
                        <label htmlFor="No Milk">No Milk</label><br/> */}
                        <input type="radio" id="(Fresh Milk)" name={props.googleformmilk} value="Fresh Milk" onChange={(e)=>{sethotprice(item_price+0);sethottotal((Number(item_price)+0)*10000*hot/10000);sethotmilk(e.target.id);setmilk1(0); settotal((item_price+0)*10000*(hot)/10000+coldprice*10000*cold/10000)}}/>
                        <label htmlFor="Fresh Milk">Fresh Milk</label><br/>
                        <input type="radio" id="(Skinny Milk)" name={props.googleformmilk} value="Skinny Milk" onChange={(e)=>{sethotprice(item_price+0);sethottotal((Number(item_price)+0)*10000*hot/10000);sethotmilk(e.target.id);setmilk1(0); settotal((item_price+0)*10000*(hot)/10000+coldprice*10000*cold/10000)}}/>
                        <label htmlFor="Skinny Milk">Skinny Milk</label><br/>
                        <input type="radio" id="(Oat Milk)" name={props.googleformmilk} value="Oat Milk"  onChange={(e)=>{sethotprice(item_price+1);sethottotal((Number(item_price)+1)*10000*hot/10000);sethotmilk(e.target.id);setmilk1(1); settotal((item_price+1)*10000*(hot)/10000+coldprice*10000*cold/10000)}}/>
                        <label htmlFor="Oat Milk">Oat Milk +$1 </label><br/>
                      </small>
                      <small className='text-secondary mx-3'>
                        <input type="radio" id="(Soy Milk)" name={props.googleformmilk} value="Soy Milk +$1"  onChange={(e)=>{sethotprice(item_price+1);sethottotal((item_price+1)*10000*hot/10000);sethotmilk(e.target.id);setmilk1(1); settotal((item_price+1)*10000*(hot)/10000+coldprice*10000*cold/10000)}}/>
                        <label htmlFor="Soy Milk">Soy Milk +$1</label><br/>
                        <input type="radio" id="(Almond Milk)" name={props.googleformmilk} value="Almond Milk +$1"  onChange={(e)=>{sethotprice(item_price+1);sethottotal((item_price+1)*10000*hot/10000);sethotmilk(e.target.id);setmilk1(1); settotal((item_price+1)*10000*(hot)/10000+coldprice*10000*cold/10000)}}/>
                        <label htmlFor="Almond Milk">Almond Milk +$1</label><br/>
                        <input type="radio" id="(Coconut Milk)" name={props.googleformmilk} value="Coconut Milk +$1"  onChange={(e)=>{sethotprice(item_price+1);sethottotal((item_price+1)*10000*hot/10000);sethotmilk(e.target.id);setmilk1(1); settotal((item_price+1)*10000*(hot)/10000+coldprice*10000*cold/10000)}}/>
                        <label htmlFor="Coconut Milk">Coconut Milk +$1</label>

                      </small>
                      </div>
                      </div>:<></>
                    }
                      <hr className='mt-3'/>
                    </div>
                    
                    :<></>}

                     
                    
                </div>
                <div className='d-flex flex-row col-12 justify-content-left mb-3 pb-3 mx-auto row ' >

  
                      <div className='col-12 '>
                      <div className='d-flex flex-row col-12 align-items-center justify-content-between mt-1'>

                        <small  ><strong>Cold</strong> </small>
                        <div className='d-flex flex-row stepper col-3 mx-3'>
                            <span 
                            className={styles.inputnumberdecrement } 
                            onClick={
                              ()=>{if(cold>0){setcold(cold-1); 
                              settotal((coldprice*10000*(cold-1)+hotprice*10000*hot)/10000);
                              setcoldtotal(coldprice*10000*(cold-1)/10000)}
                              else{
                                setcold(0)
                                settotal((hotprice*10000*hot)/10000);
                                setcoldtotal(0)
                              }

                              // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                            }}>
                            –
                            </span>
                            <input 
                            type='number' 
                            id={props.id} 
                            name={props.googleformicedqant} 
                            value={cold} 
                            className='form-control' 
                            onChange={(e)=>{setcold(''); 
                            setcold(parseFloat(e.target.value));
                            settotal((coldprice*10000*(e.target.value)+hotprice*10000*hot)/10000);
                            setcoldtotal(coldprice*10000*(e.target.value)/10000)}}
                            />
                            <span 
                            className={styles.inputnumberincrement} 
                            onClick={
                              ()=>{setcold(cold+1);
                              settotal((coldprice*10000*(cold+1)+hotprice*10000*hot)/10000);
                              setcoldtotal(coldprice*10000*(cold+1)/10000)
                              //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}>
                              +
                              </span>
                        </div>

                        <div className='d-flex flex-row col-12  mt-1'>
                          <small className='text-secondary mx-2' >${parseFloat(coldtotal).toFixed(2)}</small>
                          <input type="text" style={{display:"none"}} name={props.googleformicedamount} value={coldtotal}/>
                        </div>

                      </div>


                      {
                      props.milk?
                      <div className='d-flex flex-column col-12 align-items-start mt-3'>
                      <small ><strong>Milk </strong> </small>
                      <div className='d-flex flex-row '>
                      <small className='text-secondary ' >
                        <input type="radio" id="(Fresh Milk)" name={props.googleformicedmilk} value="Fresh Milk" onChange={(e)=>{setcoldprice(item_price+0);setcoldtotal((item_price+0)*10000*(cold)/10000);setcoldmilk(e.target.id);setmilk(0); settotal((item_price+0)*10000*cold/10000+hotprice*10000*hot/10000)}}/>
                        <label htmlFor="Fresh Milk">Fresh Milk</label><br/>
                        <input type="radio" id="(Skinny Milk)" name={props.googleformicedmilk} value="Skinny Milk"  onChange={(e)=>{setcoldprice(item_price+0);setcoldtotal((item_price+0)*10000*(cold)/10000);setcoldmilk(e.target.id);setmilk(0); settotal((item_price+0)*10000*(cold)/10000+hotprice*10000*hot/10000)}}/>
                        <label htmlFor="Skinny Milk">Skinny Milk</label><br/>
                        <input type="radio" id="(Oat Milk)" name={props.googleformicedmilk} value="Oat Milk"  onChange={(e)=>{setcoldprice(item_price+1);setcoldtotal((item_price+1)*10000*(cold)/10000);setcoldmilk(e.target.id);setmilk(1); settotal((item_price+1)*10000*(cold)/10000+hotprice*10000/hot/10000)}}/>
                        <label htmlFor="Oat Milk">Oat Milk +$1 </label><br/>
                      </small>
                      <small className='text-secondary mx-3'>
                        <input type="radio" id="(Soy Milk)" name={props.googleformicedmilk} value="Soy Milk +$1"  onChange={(e)=>{setcoldprice(item_price+1);setcoldtotal((item_price+1)*10000*(cold)/10000);setcoldmilk(e.target.id); setmilk(1);settotal((item_price+1)*10000*(cold)/10000+hotprice*10000*hot/10000)}}/>
                        <label htmlFor="Soy Milk">Soy Milk +$1</label><br/>
                        <input type="radio" id="(Almond Milk)" name={props.googleformicedmilk} value="Almond Milk +$1"  onChange={(e)=>{setcoldprice(item_price+1);setcoldtotal((item_price+1)*10000*(cold)/10000);setcoldmilk(e.target.id);setmilk(1); settotal((item_price+1)*10000*(cold)/10000+hotprice*10000*hot/10000)}}/>
                        <label htmlFor="Almond Milk">Almond Milk +$1</label><br/>
                        <input type="radio" id="(Coconut Milk)" name={props.googleformicedmilk} value="Coconut Milk +$1" onChange={(e)=>{setcoldprice(item_price+1);setcoldtotal((item_price+1)*10000*(cold)/10000);setcoldmilk(e.target.id);setmilk(1); settotal((item_price+1)*10000*(cold)/10000+hotprice*10000*hot/10000)}}/>
                        <label htmlFor="Coconut Milk">Coconut Milk +$1</label>
                      </small>
                      </div>
                      </div>
                      :<></>
                    }

                    </div>

                </div>

              </div>
            </div>
          </div>
        </div>
    </div>

    
  )
}

export default forwardRef(Item2);