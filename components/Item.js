import React, { useRef } from 'react'
import Image from 'next/image'
import styles from '../styles/Item.module.css'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect, forwardRef } from 'react'



function Item(props, ref) {
  const [change, setchange] = useState(0);
  const [hot, sethot] = useState(0);
  const [hotprice, sethotprice] = useState(props.price);
  const [hottotal, sethottotal] = useState(0);

  const [hotextra, sethotextra] = useState(0);
  const [hotextraprice, sethotextraprice] = useState(props.price+1);
  const [hotextratotal, sethotextratotal] = useState(0);

  const [cold, setcold] = useState(0);
  const [coldprice, setcoldprice] = useState(props.price);
  const [coldtotal, setcoldtotal] = useState(0);

  const [coldextra, setcoldextra] = useState(0);
  const [coldextraprice, setcoldextraprice] = useState(props.price+1);
  const [coldextratotal, setcoldextratotal] = useState(0);


  const [total, settotal] = useState(0);
  

  const [aa, setaa] = useState('')

  const[text,settext] = useState( {summary:'',quantity:'',price:'',total:''})
  const[text2,settext2] = useState( {summary:'',quantity:'',price:'',total:''})
  const[text3,settext3] = useState( {summary:'',quantity:'',price:'',total:''})
  const[text4,settext4] = useState( {summary:'',quantity:'',price:'',total:''})


//when size changed in parent component, item price change too.
useEffect(()=>{
  if(props.size=="Regular"){
    sethotprice(props.price)
    sethottotal(props.price*hot)
    sethotextraprice(props.price+1)
    sethotextratotal((props.price+1)*hotextra)  
    setcoldprice(props.price)
    setcoldtotal(props.price*cold)  
    setcoldextraprice(props.price+1) 
    setcoldextratotal((props.price+1)*coldextra) 


  }
  else if(props.size=="Small"){
    sethotprice(props.price2)  
    sethottotal(props.price2*hot)
    sethotextraprice(props.price2+1)  
    sethotextratotal((props.price2+1)*hotextra)
    setcoldprice(props.price2)
    setcoldtotal(props.price2*cold)  
    setcoldextraprice(props.price2+1)
    setcoldextratotal((props.price2+1)*coldextra)  

  }

},[props.size])


if(hottotal<0){
  sethottotal(0)
}
if(coldtotal<0){
  setcoldtotal(0)
}
if(hotextratotal<0){
  sethotextratotal(0)
}
if(coldextratotal<0){
  setcoldextratotal(0)
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
      settotal(hotextratotal+coldtotal+coldextratotal)
    }
  },[hot])

//cold quantity beetween 0-100
  useEffect(()=>{
    if(parseInt(cold)>100){
      setcold(100)
    }
    else if(parseInt(cold)<1){
      setcold(0)
      settotal(hottotal+hotextratotal+coldextratotal)
    }
  },[cold])


//hot quantity between 0-100
useEffect(()=>{
  if(hotextra==''){
    sethotextra(0)
  }
  if(parseInt(hotextra)>100){
    sethotextra(100)
  }
  else if(parseInt(hotextra)<1){
    sethotextra(0)
    settotal(hottotal+coldtotal+coldextratotal)
  }
},[hotextra])

//cold quantity beetween 0-100
useEffect(()=>{
  if(parseInt(coldextra)>100){
    setcoldextra(100)
  }
  else if(parseInt(coldextra)<1){
    setcoldextra(0)
    settotal(hottotal+hotextratotal+coldtotal)
  }
},[coldextra])



//set summary1 and summary3 in parent component
  useEffect(()=>{


    if(hot>0){
       settext({
         summary:`Hot ${props.product} x ${hot}  =  $ ${parseFloat(hottotal).toFixed(2)}`,
         quantity:`Hot ${props.product} x ${hot}`,
         price:`$ ${parseFloat(hottotal).toFixed(2)}`,
         total:hottotal

        })
     }
     else if(hot<=0){
      settext({
        summary:"",
        quantity:"",
        price:"",
        total:""

       })
     }

     if(cold>0){
      settext2({

        summary:`Iced ${props.product} x ${cold}  =  $ ${parseFloat(coldtotal).toFixed(2)}`,
        quantity:`Iced ${props.product} x ${cold}`,
        price:`$ ${parseFloat(coldtotal).toFixed(2)}`,
        total:coldtotal
       })

     }
     else if(cold<=0){
      settext2({
        summary:"",
        quantity:"",
        price:"",
        total:""
       })
     }

     if(hotextra>0){
      settext3({
        summary:`Hot ${props.product} (Extra Shot) x ${hotextra}  =  $ ${parseFloat(hotextratotal).toFixed(2)}`,
        quantity:`Hot ${props.product} (Extra Shot) x ${hotextra}`,
        price:`$ ${parseFloat(hotextratotal).toFixed(2)}`,
        total:hotextratotal

       })
    }
    else if(hotextra<=0){
     settext3({
       summary:"",
       quantity:"",
       price:"",
       total:""

      })
    }

    if(coldextra>0){
     settext4({

       summary:`Iced ${props.product} (Extra Shot) x ${coldextra}  =  $ ${parseFloat(coldextratotal).toFixed(2)}`,
       quantity:`Iced ${props.product} (Extra Shot) x ${coldextra}`,
       price:`$ ${parseFloat(coldextratotal).toFixed(2)}`,
       total:coldextratotal
      })

    }
    else if(coldextra<=0){
     settext4({
       summary:"",
       quantity:"",
       price:"",
       total:""
      })
    }
    props.setgooglesheet([]);


},[coldtotal,hottotal,hotextratotal,coldextratotal,cold,hot,coldextra,hotextra,total])


useEffect(()=>{
  props.setgooglesheet('123');


},[text,text2,text3,text4])



  return (
    <div className='mt-1 mb-2 col-11 mx-auto row'> 
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>        
      </Head>
    
          <div ref={ref} style={{display:"none"}} >
                <div>{text.quantity},{text2.quantity},{text3.quantity},{text4.quantity},,,,,,,,,</div>
                <div>{text.price},{text2.price},{text3.price},{text4.price},,,,,,,,,</div>
                <div>{text.total},{text2.total},{text3.total},{text4.total},,,,,,,,,</div>
                <div>{text.summary},{text2.summary},{text3.summary},{text4.summary},,,,,,,,,{hot+cold+hotextra+coldextra}</div>


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

                      {props.icelevel?<strong className='mt-4' >Hot</strong>:<></>}

                      
                      <div className='d-flex flex-row col-12'>
                      {props.icelevel?
                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                          {props.extrashot?<small><strong>No Extra shot</strong></small>:<></>}
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (hot > 0) {
                                  sethot(hot - 1);
                                  settotal(
                                    (hotprice * 10000 * (hot - 1)/10000) + coldtotal+coldextratotal+hotextratotal
                                  );
                                  sethottotal(
                                    (hotprice * 10000 * (hot - 1)) / 10000
                                  );
                                } else {
                                  sethot(0);
                                  settotal(coldtotal+coldextratotal+hotextratotal);
                                  sethottotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.ghotquant}
                              value={hot}
                              className="form-control"
                              onChange={(e) => {
                                sethot("");
                                sethot(parseFloat(e.target.value));
                                settotal(
                                  (hotprice * 10000 * e.target.value/10000) +coldtotal+coldextratotal+hotextratotal
                                );
                                sethottotal(
                                  (hotprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                sethot(hot + 1);
                                settotal(
                                  (hotprice * 10000 * (hot + 1)/10000) +coldtotal+coldextratotal+hotextratotal
                                );
                                sethottotal(
                                  (hotprice * 10000 * (hot + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>


                        </div>
                      </div>
                    
                    :<></>}

{props.extrashot ? (
                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                      <small>
                        <strong>With Extra Shot +$1</strong>{" "}
                      </small>
                      <div className="d-flex flex-row align-items-center mt-2">
                        <div className="d-flex flex-row stepper col-9">
                          <span
                            className={styles.inputnumberdecrement}
                            onClick={() => {
                              if (hotextra > 0) {
                                sethotextra(hotextra - 1);
                                settotal(
                                  (hotextraprice * 10000 * (hotextra - 1)/10000) +coldtotal+coldextratotal+hottotal
                                );
                                sethotextratotal(
                                  (hotextraprice * 10000 * (hotextra - 1)) / 10000
                                );
                              } else {
                                sethotextra(0);
                                settotal(coldtotal+coldextratotal+hottotal);
                                sethotextratotal(0);
                              }

                              // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                            }}
                          >
                            –
                          </span>
                          <input
                            type="number"
                            id={props.id}
                            name={props.ghotextraquant}
                            value={hotextra}
                            className="form-control"
                            onChange={(e) => {
                              sethotextra("");
                              sethotextra(parseFloat(e.target.value));
                              settotal(
                                (hotextraprice * 10000 * e.target.value/10000) +coldtotal+coldextratotal+hottotal
                              );
                              sethotextratotal(
                                (hotextraprice * 10000 * e.target.value) / 10000
                              );
                            }}
                          />
                          <span
                            className={styles.inputnumberincrement}
                            onClick={() => {
                              sethotextra(hotextra + 1);
                              settotal(
                                (hotextraprice * 10000 * (hotextra + 1)/10000) +coldtotal+coldextratotal+hottotal
                              );
                              sethotextratotal(
                                (hotextraprice * 10000 * (hotextra + 1)) / 10000
                              );
                              //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                            }}
                          >
                            +
                          </span>
                        </div>

                        <div className="d-flex flex-row col-12  mt-1">

                          <input
                            type="text"
                            style={{ display: "none" }}
                            name={props.hottotal}
                            value={hottotal+hotextratotal}
                          />
                        </div>
                      </div>
                    </div>) : (
                    <></>
                  )}

                     </div>
                     {props.icelevel?<small className="text-secondary mt-1 mb-2">
                              ${parseFloat(hottotal+hotextratotal).toFixed(2)}
                      </small>:<></>}

                     {props.icelevel?<hr/>:<></>}
                     
                    
                     <strong className='mt-4'>Cold</strong>{" "}

                <div className='d-flex flex-row col-12'>

                <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                {props.extrashot?<small><strong>No Extra shot</strong></small>:<></>}

                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (cold > 0) {
                                  setcold(cold - 1);
                                  settotal(
                                    (coldprice * 10000 * (cold - 1)/10000) +hotextratotal+coldextratotal+hottotal
                                  );
                                  setcoldtotal(
                                    (coldprice * 10000 * (cold - 1)) / 10000
                                  );
                                } else {
                                  setcold(0);
                                  settotal(hotextratotal+coldextratotal+hottotal);
                                  setcoldtotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.gcoldquant}
                              value={cold}
                              className="form-control"
                              onChange={(e) => {
                                setcold("");
                                setcold(parseFloat(e.target.value));
                                settotal(
                                  (coldprice * 10000 * e.target.value/10000) +hotextratotal+coldextratotal+hottotal
                                );
                                setcoldtotal(
                                  (coldprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                setcold(cold + 1);
                                settotal(
                                  (coldprice * 10000 * (cold + 1)/10000) +hotextratotal+coldextratotal+hottotal
                                );
                                setcoldtotal(
                                  (coldprice * 10000 * (cold + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>


                        </div>
                      </div>
                {props.extrashot ? (
                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                      <small>
                        <strong>With Extra Shot +$1</strong>{" "}
                      </small>
                      <div className="d-flex flex-row align-items-center mt-2">
                        <div className="d-flex flex-row stepper col-9">
                          <span
                            className={styles.inputnumberdecrement}
                            onClick={() => {
                              if (coldextra > 0) {
                                setcoldextra(coldextra - 1);
                                settotal(
                                  (coldextraprice * 10000 * (coldextra - 1)/10000) +hotextratotal+coldtotal+hottotal
                                );
                                setcoldextratotal(
                                  (coldextraprice * 10000 * (coldextra - 1)) / 10000
                                );
                              } else {
                                setcoldextra(0);
                                settotal(hotextratotal+coldtotal+hottotal);
                                setcoldextratotal(0);
                              }

                              // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                            }}
                          >
                            –
                          </span>
                          <input
                            type="number"
                            id={props.id}
                            name={props.gcoldextraquant}
                            value={coldextra}
                            className="form-control"
                            onChange={(e) => {
                              setcoldextra("");
                              setcoldextra(parseFloat(e.target.value));
                              settotal(
                                (coldextraprice * 10000 * e.target.value/10000) +hotextratotal+coldtotal+hottotal
                              );
                              setcoldextratotal(
                                (coldextraprice * 10000 * e.target.value) / 10000
                              );
                            }}
                          />
                          <span
                            className={styles.inputnumberincrement}
                            onClick={() => {
                              setcoldextra(coldextra + 1);
                              settotal(
                                (coldextraprice * 10000 * (coldextra + 1)/10000) +hotextratotal+coldtotal+hottotal
                              );
                              setcoldextratotal(
                                (coldextraprice * 10000 * (coldextra + 1)) / 10000
                              );
                              //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                            }}
                          >
                            +
                          </span>
                        </div>

                        <div className="d-flex flex-row col-12  mt-1">
                          <input
                            type="text"
                            style={{ display: "none" }}
                            name={props.coldtotal}
                            value={coldtotal+coldextratotal}
                          />
                        </div>
                      </div>
                    </div>) : (
                    <></>
                  )}

                  </div>
                      <small className="text-secondary mt-1 mb-2">
                              ${parseFloat(coldtotal+coldextratotal).toFixed(2)}
                      </small>

</div>
              </div>
            </div>
          </div>
        </div>
    </div>

    
  )
}

export default forwardRef(Item);