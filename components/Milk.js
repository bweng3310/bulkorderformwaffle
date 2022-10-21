import React, { useRef } from "react";
import Image from "next/image";
import styles from "../styles/Item.module.css";
import Head from "next/head";
import { useState } from "react";
import { useEffect, forwardRef } from "react";

function Milk(props, ref) {
    const [hotfreshmilk, sethotfreshmilk] = useState(0);
    const [hotfreshmilkprice, sethotfreshmilkprice] = useState(props.price);
    const [hotfreshmilktotal, sethotfreshmilktotal] = useState(0);

    const [hotskinnymilk, sethotskinnymilk] = useState(0);
    const [hotskinnymilkprice, sethotskinnymilkprice] = useState(props.price);
    const [hotskinnymilktotal, sethotskinnymilktotal] = useState(0);

    const [hotoatmilk, sethotoatmilk] = useState(0);
    const [hotoatmilkprice, sethotoatmilkprice] = useState(props.price+1);
    const [hotoatmilktotal, sethotoatmilktotal] = useState(0);

    const [hotsoymilk, sethotsoymilk] = useState(0);
    const [hotsoymilkprice, sethotsoymilkprice] = useState(props.price+1);
    const [hotsoymilktotal, sethotsoymilktotal] = useState(0);

    const [hotalmondmilk, sethotalmondmilk] = useState(0);
    const [hotalmondmilkprice, sethotalmondmilkprice] = useState(props.price+1);
    const [hotalmondmilktotal, sethotalmondmilktotal] = useState(0);

    const [hotcoconutmilk, sethotcoconutmilk] = useState(0);
    const [hotcoconutmilkprice, sethotcoconutmilkprice] = useState(props.price+1);
    const [hotcoconutmilktotal, sethotcoconutmilktotal] = useState(0);

    const [coldfreshmilk, setcoldfreshmilk] = useState(0);
    const [coldfreshmilkprice, setcoldfreshmilkprice] = useState(props.price);
    const [coldfreshmilktotal, setcoldfreshmilktotal] = useState(0);

    const [coldskinnymilk, setcoldskinnymilk] = useState(0);
    const [coldskinnymilkprice, setcoldskinnymilkprice] = useState(props.price);
    const [coldskinnymilktotal, setcoldskinnymilktotal] = useState(0);

    const [coldoatmilk, setcoldoatmilk] = useState(0);
    const [coldoatmilkprice, setcoldoatmilkprice] = useState(props.price+1);
    const [coldoatmilktotal, setcoldoatmilktotal] = useState(0);

    const [coldsoymilk, setcoldsoymilk] = useState(0);
    const [coldsoymilkprice, setcoldsoymilkprice] = useState(props.price+1);
    const [coldsoymilktotal, setcoldsoymilktotal] = useState(0);

    const [coldalmondmilk, setcoldalmondmilk] = useState(0);
    const [coldalmondmilkprice, setcoldalmondmilkprice] = useState(props.price+1);
    const [coldalmondmilktotal, setcoldalmondmilktotal] = useState(0);

    const [coldcoconutmilk, setcoldcoconutmilk] = useState(0);
    const [coldcoconutmilkprice, setcoldcoconutmilkprice] = useState(props.price+1);
    const [coldcoconutmilktotal, setcoldcoconutmilktotal] = useState(0);

    const [hottotal, sethottotal] = useState(0);
    const [coldtotal, setcoldtotal] = useState(0);
    const [change, setchange] = useState(0);



  const [text, settext] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text2, settext2] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text3, settext3] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text4, settext4] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text5, settext5] = useState({
    summary: "",
    cold: "",
    price: "",
    coldtotal: "",
  });
  const [text6, settext6] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text7, settext7] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text8, settext8] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text9, settext9] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text10, settext10] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text11, settext11] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });
  const [text12, settext12] = useState({
    summary: "",
    quantity: "",
    price: "",
    total: "",
  });

  //when size changed in parent component, item price change too.
  useEffect(() => {
    // setaa(props.size);
    if (props.size == "Regular") {
        sethotfreshmilkprice(props.price);
        sethotfreshmilktotal(props.price*hotfreshmilk);

        sethotskinnymilkprice(props.price)
        sethotskinnymilktotal(props.price*hotskinnymilk)

        sethotoatmilkprice(props.price+1)
        sethotoatmilktotal((props.price+1)*hotoatmilk)

        sethotsoymilkprice(props.price+1)
        sethotsoymilktotal((props.price+1)*hotsoymilk)

        sethotalmondmilkprice(props.price+1)
        sethotalmondmilktotal((props.price+1)*hotalmondmilk)

        sethotcoconutmilkprice(props.price+1)
        sethotcoconutmilktotal((props.price+1)*hotcoconutmilk)

        setcoldfreshmilkprice(props.price);
        setcoldfreshmilktotal(props.price*coldfreshmilk);

        setcoldskinnymilkprice(props.price)
        setcoldskinnymilktotal(props.price*coldskinnymilk)

        setcoldoatmilkprice(props.price+1)
        setcoldoatmilktotal((props.price+1)*coldoatmilk)

        setcoldsoymilkprice(props.price+1)
        setcoldsoymilktotal((props.price+1)*coldsoymilk)

        setcoldalmondmilkprice(props.price+1)
        setcoldalmondmilktotal((props.price+1)*coldalmondmilk)

        setcoldcoconutmilkprice(props.price+1)
        setcoldcoconutmilktotal((props.price+1)*coldcoconutmilk)



    } else if (props.size == "Small") {
      sethotfreshmilkprice(props.price2);
      sethotfreshmilktotal(props.price2*hotfreshmilk);

      sethotskinnymilkprice(props.price2)
      sethotskinnymilktotal(props.price2*hotskinnymilk)

      sethotoatmilkprice(props.price2+1)
      sethotoatmilktotal((props.price2+1)*hotoatmilk)

      sethotsoymilkprice(props.price2+1)
      sethotsoymilktotal((props.price2+1)*hotsoymilk)

      sethotalmondmilkprice(props.price2+1)
      sethotalmondmilktotal((props.price2+1)*hotalmondmilk)

      sethotcoconutmilkprice(props.price2+1)
      sethotcoconutmilktotal((props.price2+1)*hotcoconutmilk)

      setcoldfreshmilkprice(props.price2);
      setcoldfreshmilktotal(props.price2*coldfreshmilk);

      setcoldskinnymilkprice(props.price2)
      setcoldskinnymilktotal(props.price2*coldskinnymilk)

      setcoldoatmilkprice(props.price2+1)
      setcoldoatmilktotal((props.price2+1)*coldoatmilk)

      setcoldsoymilkprice(props.price2+1)
      setcoldsoymilktotal((props.price2+1)*coldsoymilk)

      setcoldalmondmilkprice(props.price2+1)
      setcoldalmondmilktotal((props.price2+1)*coldalmondmilk)

      setcoldcoconutmilkprice(props.price2+1)
      setcoldcoconutmilktotal((props.price2+1)*coldcoconutmilk)
  }
  }, [props.size]);


  if (hotfreshmilktotal < 0) {
    sethotfreshmilktotal(0);
  }
  if (hotskinnymilktotal < 0) {
    sethotskinnymilktotal(0);
  }
  if (hotoatmilktotal < 0) {
    sethotoatmilktotal(0);
  }
  if (hotsoymilktotal < 0) {
    sethotsoymilktotal(0);
  }
  if (hotalmondmilktotal < 0) {
    sethotalmondmilktotal(0);
  }
  if (hotcoconutmilktotal < 0) {
    sethotcoconutmilktotal(0);
  }
  if (coldfreshmilktotal < 0) {
    setcoldfreshmilktotal(0);
  }
  if (coldskinnymilktotal < 0) {
    setcoldskinnymilktotal(0);
  }
  if (coldoatmilktotal < 0) {
    setcoldoatmilktotal(0);
  }
  if (coldsoymilktotal < 0) {
    setcoldsoymilktotal(0);
  }
  if (coldalmondmilktotal < 0) {
    setcoldalmondmilktotal(0);
  }
  if (coldcoconutmilktotal < 0) {
    setcoldcoconutmilktotal(0);
  }


  useEffect(() => {
    // if (hotfreshmilk == "") {
    //   sethot(0);
    // }
    if (parseInt(hotfreshmilk) > 100) {
      sethotfreshmilk(100);
    } else if (parseInt(hotfreshmilk) < 1) {
      sethotfreshmilk(0);
      sethottotal(hotskinnymilktotal+hotoatmilktotal+hotalmondmilktotal+hotcoconutmilktotal+hotsoymilktotal);
    }
  }, [hotfreshmilk]);

  useEffect(() => {
    if (parseInt(hotskinnymilk) > 100) {
      sethotskinnymilk(100);
    } else if (parseInt(hotskinnymilk) < 1) {
      sethotskinnymilk(0);
      sethottotal(hotfreshmilktotal+hotoatmilktotal+hotalmondmilktotal+hotcoconutmilktotal+hotsoymilktotal);
    }
  }, [hotskinnymilk]);

  useEffect(() => {
    // if (hotoatmilk == "") {
    //   sethot(0);
    // }
    if (parseInt(hotoatmilk) > 100) {
      sethotoatmilk(100);
    } else if (parseInt(hotoatmilk) < 1) {
      sethotoatmilk(0);
      sethottotal(hotfreshmilktotal+hotskinnymilktotal+hotalmondmilktotal+hotcoconutmilktotal+hotsoymilktotal);
    }
  }, [hotoatmilk]);

  useEffect(() => {
    if (parseInt(hotsoymilk) > 100) {
      sethotsoymilk(100);
    } else if (parseInt(hotsoymilk) < 1) {
      sethotsoymilk(0);
      sethottotal(hotfreshmilk+hotoatmilktotal+hotalmondmilktotal+hotcoconutmilktotal+hotskinnymilktotal);
    }
  }, [hotsoymilk]);

  useEffect(() => {
    // if (hot == "") {
    //   sethot(0);
    // }
    if (parseInt(hotalmondmilk) > 100) {
      sethotalmondmilk(100);
    } else if (parseInt(hotalmondmilk) < 1) {
      sethotalmondmilk(0);
      sethottotal(hotfreshmilktotal+hotoatmilktotal+hotskinnymilktotal+hotcoconutmilktotal+hotsoymilktotal);
    }
  }, [hotalmondmilk]);

  useEffect(() => {
    if (parseInt(hotcoconutmilk) > 100) {
      sethotcoconutmilk(100);
    } else if (parseInt(hotcoconutmilk) < 1) {
      sethotcoconutmilk(0);
      sethottotal(hotfreshmilktotal+hotoatmilktotal+hotalmondmilktotal+hotskinnymilk+hotsoymilktotal);
    }
  }, [hotcoconutmilk]);

  useEffect(() => {
    // if (hot == "") {
    //   sethot(0);
    // }
    if (parseInt(coldfreshmilk) > 100) {
      setcoldfreshmilk(100);
    } else if (parseInt(coldfreshmilk) < 1) {
      setcoldfreshmilk(0);
      setcoldtotal(coldskinnymilktotal+coldoatmilktotal+coldalmondmilktotal+coldcoconutmilktotal+coldsoymilktotal);
    }
  }, [coldfreshmilk]);

  useEffect(() => {
    if (parseInt(coldskinnymilk) > 100) {
      setcoldskinnymilk(100);
    } else if (parseInt(coldskinnymilk) < 1) {
      setcoldskinnymilk(0);
      setcoldtotal(coldfreshmilktotal+coldoatmilktotal+coldalmondmilktotal+coldcoconutmilktotal+coldsoymilktotal);
    }
  }, [coldskinnymilk]);

  useEffect(() => {
    // if (hot == "") {
    //   sethot(0);
    // }
    if (parseInt(coldoatmilk) > 100) {
      setcoldoatmilk(100);
    } else if (parseInt(coldoatmilk) < 1) {
      setcoldoatmilk(0);
      setcoldtotal(coldfreshmilktotal+coldskinnymilktotal+coldalmondmilktotal+coldcoconutmilktotal+coldsoymilktotal);
    }
  }, [coldoatmilk]);

  //cold quantity beetween 0-100
  useEffect(() => {
    if (parseInt(coldsoymilk) > 100) {
      setcoldsoymilk(100);
    } else if (parseInt(coldsoymilk) < 1) {
      setcoldsoymilk(0);
      setcoldtotal(coldfreshmilktotal+coldoatmilktotal+coldalmondmilktotal+coldcoconutmilktotal+coldskinnymilktotal);
    }
  }, [coldsoymilk]);

  useEffect(() => {
    // if (hot == "") {
    //   sethot(0);
    // }
    if (parseInt(coldalmondmilk) > 100) {
      setcoldalmondmilk(100);
    } else if (parseInt(coldalmondmilk) < 1) {
      setcoldalmondmilk(0);
      setcoldtotal(coldfreshmilktotal+coldoatmilktotal+coldsoymilktotal+coldcoconutmilktotal+coldskinnymilktotal);
    }
  }, [coldalmondmilk]);

  useEffect(() => {
    if (parseInt(coldcoconutmilk) > 100) {
      setcoldcoconutmilk(100);
    } else if (parseInt(coldcoconutmilk) < 1) {
      setcoldcoconutmilk(0);
      setcoldtotal(coldfreshmilktotal+coldoatmilktotal+coldalmondmilktotal+coldsoymilktotal+coldskinnymilktotal);
    }
  }, [coldcoconutmilk]);










  //set summary1 and summary3 in parent component
  useEffect(() => {
    if (hotfreshmilk > 0) {
      settext({
        summary: `Hot ${props.product} Fresh Milk x ${hotfreshmilk}  =  $ ${parseFloat(hotfreshmilktotal).toFixed(2)}`,
        quantity: `Hot ${props.product} Fresh Milk x ${hotfreshmilk}`,
        price: `$ ${parseFloat(hotfreshmilktotal).toFixed(2)}`,
        total: hotfreshmilktotal,
      });
    } else if (hotfreshmilk <= 0) {
      settext({
        summary: "",
        quantity: "",
        price: "",
        total: "",
      });
    }

    if (hotskinnymilk > 0) {
      settext2({
        summary: `Hot ${props.product} Skinny Milk x ${hotskinnymilk}  =  $ ${parseFloat(hotskinnymilktotal).toFixed(2)}`,
        quantity: `Hot ${props.product} Skinny Milk x ${hotskinnymilk}`,
        price: `$ ${parseFloat(hotskinnymilktotal).toFixed(2)}`,
        total: hotskinnymilktotal,
      });
    } else if (hotskinnymilk <= 0) {
      settext2({
        summary: "",
        quantity: "",
        price: "",
        total: "",
      });
    }
    if (hotoatmilk > 0) {
        settext3({
          summary: `Hot ${props.product} Oat Milk x ${hotoatmilk}  =  $ ${parseFloat(hotoatmilktotal).toFixed(2)}`,
          quantity: `Hot ${props.product} Oat Milk x ${hotoatmilk}`,
          price: `$ ${parseFloat(hotoatmilktotal).toFixed(2)}`,
          total: hotoatmilktotal,
        });
      } else if (hotoatmilk <= 0) {
        settext3({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
  
      if (hotsoymilk > 0) {
        settext4({
          summary: `Hot ${props.product} Soy Milk x ${hotsoymilk}  =  $ ${parseFloat(hotsoymilktotal).toFixed(2)}`,
          quantity: `Hot ${props.product} Soy Milk x ${hotsoymilk}`,
          price: `$ ${parseFloat(hotsoymilktotal).toFixed(2)}`,
          total: hotsoymilktotal,
        });
      } else if (hotsoymilk <= 0) {
        settext4({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
    if (hotalmondmilk > 0) {
        settext5({
          summary: `Hot ${props.product} Almond Milk x ${hotalmondmilk}  =  $ ${parseFloat(hotalmondmilktotal).toFixed(2)}`,
          quantity: `Hot ${props.product} Almond Milk x ${hotalmondmilk}`,
          price: `$ ${parseFloat(hotalmondmilktotal).toFixed(2)}`,
          total: hotalmondmilktotal,
        });
      } else if (hotalmondmilk<= 0) {
        settext5({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
  
      if (hotcoconutmilk > 0) {
        settext6({
          summary: `Hot ${props.product} Coconut Milk x ${hotcoconutmilk}  =  $ ${parseFloat(hotcoconutmilktotal).toFixed(2)}`,
          quantity: `Hot ${props.product} Coconut Milk x ${hotcoconutmilk}`,
          price: `$ ${parseFloat(hotcoconutmilktotal).toFixed(2)}`,
          total: hotcoconutmilktotal,
        });
      } else if (hotcoconutmilk <= 0) {
        settext6({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
      if (coldfreshmilk > 0) {
        settext7({
          summary: `Iced ${props.product} Fresh Milk x ${coldfreshmilk}  =  $ ${parseFloat(coldfreshmilktotal).toFixed(2)}`,
          quantity: `Iced ${props.product} Fresh Milk x ${coldfreshmilk}`,
          price: `$ ${parseFloat(coldfreshmilktotal).toFixed(2)}`,
          total: coldfreshmilktotal,
        });
      } else if (coldfreshmilk <= 0) {
        settext7({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
  
      if (coldskinnymilk > 0) {
        settext8({
          summary: `Iced ${props.product} Skinny Milk x ${coldskinnymilk}  =  $ ${parseFloat(coldskinnymilktotal).toFixed(2)}`,
          quantity: `Iced ${props.product} Skinny Milk x ${coldskinnymilk}`,
          price: `$ ${parseFloat(coldskinnymilktotal).toFixed(2)}`,
          total: coldskinnymilktotal,
        });
      } else if (coldskinnymilk <= 0) {
        settext8({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
      if (coldoatmilk > 0) {
        settext9({
          summary: `Iced ${props.product} Oat Milk x ${coldoatmilk}  =  $ ${parseFloat(coldoatmilktotal).toFixed(2)}`,
          quantity: `Iced ${props.product} Oat Milk x ${coldoatmilk}`,
          price: `$ ${parseFloat(coldoatmilktotal).toFixed(2)}`,
          total: coldoatmilktotal,
        });
      } else if (coldoatmilk <= 0) {
        settext9({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
  
      if (coldsoymilk > 0) {
        settext10({
          summary: `Iced ${props.product} Soy Milk x ${coldsoymilk}  =  $ ${parseFloat(coldsoymilktotal).toFixed(2)}`,
          quantity: `Iced ${props.product} Soy Milk x ${coldsoymilk}`,
          price: `$ ${parseFloat(coldsoymilktotal).toFixed(2)}`,
          total: coldsoymilktotal,
        });
      } else if (coldsoymilk <= 0) {
        settext10({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
      if (coldalmondmilk > 0) {
        settext11({
          summary: `Iced ${props.product} Almond Milk x ${coldalmondmilk}  =  $ ${parseFloat(coldalmondmilktotal).toFixed(2)}`,
          quantity: `Iced ${props.product} Almond Milk x ${coldalmondmilk}`,
          price: `$ ${parseFloat(coldalmondmilktotal).toFixed(2)}`,
          total: coldalmondmilktotal,
        });
      } else if (coldalmondmilk <= 0) {
        settext11({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }
  
      if (coldcoconutmilk> 0) {
        settext12({
          summary: `Iced ${props.product} Coconut Milk x ${coldcoconutmilk}  =  $ ${parseFloat(coldcoconutmilktotal).toFixed(2)}`,
          quantity: `Iced ${props.product} Coconut Milk x ${coldcoconutmilk}`,
          price: `$ ${parseFloat(coldcoconutmilktotal).toFixed(2)}`,
          total: coldcoconutmilktotal,
        });
      } else if (coldcoconutmilk <= 0) {
        settext12({
          summary: "",
          quantity: "",
          price: "",
          total: "",
        });
      }

    props.setgooglesheet([]);
  }, [
    hotfreshmilk,hotskinnymilk,hotoatmilk,hotsoymilk,
    hotalmondmilk,hotcoconutmilk,hotfreshmilktotal,
    hotskinnymilktotal,hotoatmilktotal,hotalmondmilktotal,
    hotcoconutmilktotal,hotsoymilktotal,coldfreshmilk,
    coldskinnymilk,coldoatmilk,coldsoymilk,coldalmondmilk,
    coldcoconutmilk,coldfreshmilktotal,coldskinnymilktotal,
    coldoatmilktotal,coldsoymilktotal,coldalmondmilktotal,coldcoconutmilktotal]);


    useEffect(()=>{
      props.setgooglesheet('123');
    
    
    },[text,text2,text3,text4,text5,text6,text7,text8,text9,text10])
    
  return (
    <div className="mt-1 mb-2 col-11 mx-auto row">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div ref={ref} style={{ display: "none" }}>
        <div> {text.quantity},{text2.quantity},{text3.quantity},
         {text4.quantity},{text5.quantity},{text6.quantity},{text7.quantity},
         {text8.quantity},{text9.quantity},{text10.quantity},{text11.quantity},{text12.quantity},
        </div>
        <div>{text.price},{text2.price},{text3.price},{text4.price},
        {text5.price},{text6.price},{text7.price},{text8.price},
        {text9.price},{text10.price},{text11.price},{text12.price},
        </div>
        <div>{text.total},{text2.total},{text3.total},{text4.total},
        {text5.total},{text6.total},{text7.total},{text8.total},
        {text9.total},{text10.total},{text11.total},{text12.total},
        </div>
        <div>
        {text.summary},{text2.summary},{text3.summary},{text4.summary},
        {text5.summary},{text6.summary},{text7.summary},{text8.summary},
        {text9.summary},{text10.summary},{text11.summary},{text12.summary},{
          hotfreshmilk+hotskinnymilk+hotoatmilk+hotsoymilk+hotalmondmilk+
          hotcoconutmilk+coldfreshmilk+coldskinnymilk+coldoatmilk+coldsoymilk+coldalmondmilk+coldcoconutmilk
        }
        </div>
        </div>


      <div className="accordion col-12" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id={props.accordion3}>
            <button
              className="accordion-button collapsed d-flex flex-row justify-content-right align-items-center col-12"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={props.accordion2}
              aria-expanded="false"
              aria-controls={props.accordion}
            >
              <div className={styles.picture}>
                <Image
                  src={props.pic}
                  alt={props.product}
                  width={50}
                  height={50}
                  layout="fixed"
                  className={styles.pic}
                />
              </div>
              <div className="d-flex flex-column col-8  justify-content-between">
                <div>{props.product}</div>
                <small className="text-secondary">
                  {props.size} $
                  {props.size == "Regular"
                    ? parseFloat(props.price).toFixed(2)
                    : parseFloat(props.price2).toFixed(2)}
                </small>
              </div>
            </button>
          </h2>
          <div
            id={props.accordion}
            className="accordion-collapse collapse"
            aria-labelledby={props.accordion3}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-column ">
              <div className="d-flex flex-row col-12 justify-content-left mt-2 mb-1  mx-auto row ">
                <small className={styles.detail}>{props.discription}</small>
                {props.milk ? (
                    <div className="mt-4">
                        <strong >Hot</strong>{" "}

                        <div className='d-flex flex-row col-12'>
                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-4">
                        <small>
                          <strong>With Fresh Milk</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (hotfreshmilk > 0) {
                                  sethotfreshmilk(hotfreshmilk - 1);
                                  sethottotal(
                                    (hotfreshmilkprice * 10000 * (hotfreshmilk - 1)/10000)+hotskinnymilktotal+hotoatmilktotal
                                    +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                  );
                                  sethotfreshmilktotal(
                                    (hotfreshmilkprice * 10000 * (hotfreshmilk - 1)) / 10000
                                  );
                                } else {
                                  sethotfreshmilk(0);
                                  sethottotal(hotskinnymilktotal+hotoatmilktotal
                                    +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal);
                                  sethotfreshmilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.hotfreshmilk}
                              value={hotfreshmilk}
                              className="form-control"
                              onChange={(e) => {
                                sethotfreshmilk("");
                                sethotfreshmilk(parseFloat(e.target.value));
                                sethottotal(
                                  (hotfreshmilkprice * 10000 * e.target.value/10000)+hotskinnymilktotal+hotoatmilktotal
                                  +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                );
                                sethotfreshmilktotal(
                                  (hotfreshmilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                sethotfreshmilk(hotfreshmilk + 1);
                                sethottotal(
                                  (hotfreshmilkprice * 10000 * (hotfreshmilk + 1)/10000) +hotskinnymilktotal+hotoatmilktotal
                                  +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                );
                                sethotfreshmilktotal(
                                  (hotfreshmilkprice * 10000 * (hotfreshmilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>


                        </div>
                      </div>

                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-4">
                        <small>
                          <strong>With Skinny Milk</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (hotskinnymilk > 0) {
                                  sethotskinnymilk(hotskinnymilk - 1);
                                  sethottotal(
                                    (hotskinnymilkprice * 10000 * (hotskinnymilk - 1)/10000)+hotfreshmilktotal+hotoatmilktotal
                                    +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                  );
                                  sethotskinnymilktotal(
                                    (hotskinnymilkprice * 10000 * (hotskinnymilk - 1)) / 10000
                                  );
                                } else {
                                  sethotskinnymilk(0);
                                  sethottotal(hotfreshmilktotal+hotoatmilktotal
                                    +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal);
                                  sethotskinnymilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.hotskinnymilk}
                              value={hotskinnymilk}
                              className="form-control"
                              onChange={(e) => {
                                sethotskinnymilk("");
                                sethotskinnymilk(parseFloat(e.target.value));
                                sethottotal(
                                  (hotskinnymilkprice * 10000 * e.target.value/10000)+hotfreshmilktotal+hotoatmilktotal
                                  +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                );
                                sethotskinnymilktotal(
                                  (hotskinnymilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                sethotskinnymilk(hotskinnymilk + 1);
                                sethottotal(
                                  (hotskinnymilkprice * 10000 * (hotskinnymilk + 1)/10000)+hotfreshmilktotal+hotoatmilktotal
                                  +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                );
                                sethotskinnymilktotal(
                                  (hotskinnymilkprice * 10000 * (hotskinnymilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>
                      </div>


                      <div className='d-flex flex-row col-12'>
                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-4">
                        <small>
                          <strong>With Oat Milk +$1</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (hotoatmilk > 0) {
                                  sethotoatmilk(hotoatmilk - 1);
                                  sethottotal(
                                    (hotoatmilkprice * 10000 * (hotoatmilk - 1)/10000)+hotfreshmilktotal+hotskinnymilktotal
                                    +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                  );
                                  sethotoatmilktotal(
                                    (hotoatmilkprice * 10000 * (hotoatmilk - 1)) / 10000
                                  );
                                } else {
                                  sethotoatmilk(0);
                                  sethottotal(hotfreshmilktotal+hotskinnymilktotal
                                    +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal);
                                  sethotoatmilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.hotoatmilk}
                              value={hotoatmilk}
                              className="form-control"
                              onChange={(e) => {
                                sethotoatmilk("");
                                sethotoatmilk(parseFloat(e.target.value));
                                sethottotal(
                                  (hotoatmilkprice * 10000 * e.target.value/10000)+hotfreshmilktotal+hotskinnymilktotal
                                  +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal                                );
                                sethotoatmilktotal(
                                  (hotoatmilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                sethotoatmilk(hotoatmilk + 1);
                                sethottotal(
                                  (hotoatmilkprice * 10000 * (hotoatmilk + 1)/10000) +hotfreshmilktotal+hotskinnymilktotal
                                  +hotsoymilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                );
                                sethotoatmilktotal(
                                  (hotoatmilkprice * 10000 * (hotoatmilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>

                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-4">
                        <small>
                          <strong>With Soy Milk +$1</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (hotsoymilk > 0) {
                                  sethotsoymilk(hotsoymilk - 1);
                                  sethottotal(
                                    (hotsoymilkprice * 10000 * (hotsoymilk - 1)/10000) +hotfreshmilktotal+hotskinnymilktotal
                                    +hotoatmilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                  );
                                  sethotsoymilktotal(
                                    (hotsoymilkprice * 10000 * (hotsoymilk - 1)) / 10000
                                  );
                                } else {
                                  sethotsoymilk(0);
                                  sethottotal(hotfreshmilktotal+hotskinnymilktotal
                                    +hotoatmilktotal+hotalmondmilktotal+hotcoconutmilktotal);
                                  sethotsoymilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.hotsoymilk}
                              value={hotsoymilk}
                              className="form-control"
                              onChange={(e) => {
                                sethotsoymilk("");
                                sethotsoymilk(parseFloat(e.target.value));
                                sethottotal(
                                  (hotsoymilkprice * 10000 * e.target.value/10000) +hotfreshmilktotal+hotskinnymilktotal
                                  +hotoatmilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                );
                                sethotsoymilktotal(
                                  (hotsoymilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                sethotsoymilk(hotsoymilk + 1);
                                sethottotal(
                                  (hotsoymilkprice * 10000 * (hotsoymilk + 1)/10000) +hotfreshmilktotal+hotskinnymilktotal
                                  +hotoatmilktotal+hotalmondmilktotal+hotcoconutmilktotal
                                );
                                sethotsoymilktotal(
                                  (hotsoymilkprice * 10000 * (hotsoymilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>
                      </div>


                      <div className='d-flex flex-row col-12'>
                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                        <small>
                          <strong>With Almond Milk +$1</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (hotalmondmilk > 0) {
                                  sethotalmondmilk(hotalmondmilk - 1);
                                  sethottotal(
                                    (hotalmondmilkprice * 10000 * (hotalmondmilk - 1)/10000) +hotfreshmilktotal+hotskinnymilktotal
                                    +hotoatmilktotal+hotsoymilktotal+hotcoconutmilktotal
                                  );
                                  sethotalmondmilktotal(
                                    (hotalmondmilkprice * 10000 * (hotalmondmilk - 1)) / 10000
                                  );
                                } else {
                                  sethotalmondmilk(0);
                                  sethottotal(hotfreshmilktotal+hotskinnymilktotal
                                    +hotoatmilktotal+hotsoymilktotal+hotcoconutmilktotal);
                                  sethotalmondmilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.hotalmondmilk}
                              value={hotalmondmilk}
                              className="form-control"
                              onChange={(e) => {
                                sethotalmondmilk("");
                                sethotalmondmilk(parseFloat(e.target.value));
                                sethottotal(
                                  (hotalmondmilkprice * 10000 * e.target.value/10000) +hotfreshmilktotal+hotskinnymilktotal
                                  +hotoatmilktotal+hotsoymilktotal+hotcoconutmilktotal
                                );
                                sethotalmondmilktotal(
                                  (hotalmondmilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                sethotalmondmilk(hotalmondmilk + 1);
                                sethottotal(
                                  (hotalmondmilkprice * 10000 * (hotalmondmilk + 1)/10000) +hotfreshmilktotal+hotskinnymilktotal
                                  +hotoatmilktotal+hotsoymilktotal+hotcoconutmilktotal
                                );
                                sethotalmondmilktotal(
                                  (hotalmondmilkprice * 10000 * (hotalmondmilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>

                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                        <small>
                          <strong>With Coconut Milk +$1</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (hotcoconutmilk > 0) {
                                  sethotcoconutmilk(hotcoconutmilk - 1);
                                  sethottotal(
                                    (hotcoconutmilkprice * 10000 * (hotcoconutmilk - 1)/10000) +hotfreshmilktotal+hotskinnymilktotal
                                    +hotoatmilktotal+hotsoymilktotal+hotalmondmilktotal
                                  );
                                  sethotcoconutmilktotal(
                                    (hotcoconutmilkprice * 10000 * (hotcoconutmilk - 1)) / 10000
                                  );
                                } else {
                                  sethotcoconutmilk(0);
                                  sethottotal(hotfreshmilktotal+hotskinnymilktotal
                                    +hotoatmilktotal+hotsoymilktotal+hotalmondmilktotal);
                                  sethotcoconutmilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.hotcoconutmilk}
                              value={hotcoconutmilk}
                              className="form-control"
                              onChange={(e) => {
                                sethotcoconutmilk("");
                                sethotcoconutmilk(parseFloat(e.target.value));
                                sethottotal(
                                  (hotcoconutmilkprice * 10000 * e.target.value/10000) +hotfreshmilktotal+hotskinnymilktotal
                                  +hotoatmilktotal+hotsoymilktotal+hotalmondmilktotal
                                );
                                sethotcoconutmilktotal(
                                  (hotcoconutmilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                sethotcoconutmilk(hotcoconutmilk + 1);
                                sethottotal(
                                  (hotcoconutmilkprice * 10000 * (hotcoconutmilk + 1)/10000) +hotfreshmilktotal+hotskinnymilktotal
                                  +hotoatmilktotal+hotsoymilktotal+hotalmondmilktotal
                                );
                                sethotcoconutmilktotal(
                                  (hotcoconutmilkprice * 10000 * (hotcoconutmilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                          <div className="d-flex flex-row col-12  mt-1">
                            {/* <small className="text-secondary mx-2">
                              ${parseFloat(hotcoconutmilktotal).toFixed(2)}
                            </small> */}
                            <input
                              type="text"
                              style={{ display: "none" }}
                              name={props.hottotal}
                              value={hottotal}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                            <small className="text-secondary mt-1 mb-2">
                              ${parseFloat(hotskinnymilktotal+hotoatmilktotal+hotalmondmilktotal+hotcoconutmilktotal+hotsoymilktotal+hotfreshmilktotal).toFixed(2)}
                            </small>
                    </div>

                  ) : (
                    <></>
                  )}
              </div>
              <hr></hr>
              <div className="d-flex flex-row col-12 justify-content-left mb-3 pb-3 mx-auto row ">
                <div className="col-12 ">
                  {props.milk ? (
                    <div>
                        <strong className="mt-4">Iced</strong>{" "}
                        <div className='d-flex flex-row col-12'>
                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                        <small>
                          <strong>With Fresh Milk</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (coldfreshmilk > 0) {
                                  setcoldfreshmilk(coldfreshmilk - 1);
                                  setcoldtotal(
                                    (coldfreshmilkprice * 10000 * (coldfreshmilk - 1)/10000) +coldcoconutmilktotal+coldskinnymilktotal
                                    +coldoatmilktotal+coldsoymilktotal+coldalmondmilktotal
                                  );
                                  setcoldfreshmilktotal(
                                    (coldfreshmilkprice * 10000 * (coldfreshmilk - 1)) / 10000
                                  );
                                } else {
                                  setcoldfreshmilk(0);
                                  setcoldtotal(coldcoconutmilktotal+coldskinnymilktotal
                                    +coldoatmilktotal+coldsoymilktotal+coldalmondmilktotal);
                                  setcoldfreshmilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.coldfreshmilk}
                              value={coldfreshmilk}
                              className="form-control"
                              onChange={(e) => {
                                setcoldfreshmilk("");
                                setcoldfreshmilk(parseFloat(e.target.value));
                                setcoldtotal(
                                  (coldfreshmilkprice * 10000 * e.target.value/10000) +coldcoconutmilktotal+coldskinnymilktotal
                                  +coldoatmilktotal+coldsoymilktotal+coldalmondmilktotal
                                );
                                setcoldfreshmilktotal(
                                  (coldfreshmilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                setcoldfreshmilk(coldfreshmilk + 1);
                                setcoldtotal(
                                  (coldfreshmilkprice * 10000 * (coldfreshmilk + 1)/10000) +
                                  coldcoconutmilktotal+coldskinnymilktotal
                                  +coldoatmilktotal+coldsoymilktotal+coldalmondmilktotal                                );
                                setcoldfreshmilktotal(
                                  (coldfreshmilkprice * 10000 * (coldfreshmilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>

                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                        <small>
                          <strong>With Skinny Milk</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (coldskinnymilk > 0) {
                                  setcoldskinnymilk(coldskinnymilk - 1);
                                  setcoldtotal(
                                    (coldskinnymilkprice * 10000 * (coldskinnymilk - 1)/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                    +coldoatmilktotal+coldsoymilktotal+coldalmondmilktotal
                                  );
                                  setcoldskinnymilktotal(
                                    (coldskinnymilkprice * 10000 * (coldskinnymilk - 1)) / 10000
                                  );
                                } else {
                                  setcoldskinnymilk(0);
                                  setcoldtotal(coldcoconutmilktotal+coldfreshmilktotal
                                    +coldoatmilktotal+coldsoymilktotal+coldalmondmilktotal);
                                  setcoldskinnymilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.coldskinnymilk}
                              value={coldskinnymilk}
                              className="form-control"
                              onChange={(e) => {
                                setcoldskinnymilk("");
                                setcoldskinnymilk(parseFloat(e.target.value));
                                setcoldtotal(
                                  (coldskinnymilkprice * 10000 * e.target.value/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                  +coldoatmilktotal+coldsoymilktotal+coldalmondmilktotal
                                );
                                setcoldskinnymilktotal(
                                  (coldskinnymilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                setcoldskinnymilk(coldskinnymilk + 1);
                                setcoldtotal(
                                  (coldskinnymilkprice * 10000 * (coldskinnymilk + 1)/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                  +coldoatmilktotal+coldsoymilktotal+coldalmondmilktotal
                                );
                                setcoldskinnymilktotal(
                                  (coldskinnymilkprice * 10000 * (coldskinnymilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>
                      </div>


                    <div className='d-flex flex-row col-12'>

                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                        <small>
                          <strong>With Oat Milk +$1</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (coldoatmilk > 0) {
                                  setcoldoatmilk(coldoatmilk - 1);
                                  setcoldtotal(
                                    (coldoatmilkprice * 10000 * (coldoatmilk - 1)/10000) + coldcoconutmilktotal+coldfreshmilktotal
                                    +coldskinnymilktotal+coldsoymilktotal+coldalmondmilktotal
                                  );
                                  setcoldoatmilktotal(
                                    (coldoatmilkprice * 10000 * (coldoatmilk - 1)) / 10000
                                  );
                                } else {
                                  setcoldoatmilk(0);
                                  setcoldtotal(coldcoconutmilktotal+coldfreshmilktotal
                                    +coldskinnymilktotal+coldsoymilktotal+coldalmondmilktotal);
                                  setcoldoatmilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.coldoatmilk}
                              value={coldoatmilk}
                              className="form-control"
                              onChange={(e) => {
                                setcoldoatmilk("");
                                setcoldoatmilk(parseFloat(e.target.value));
                                setcoldtotal(
                                  (coldoatmilkprice * 10000 * e.target.value/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                  +coldskinnymilktotal+coldsoymilktotal+coldalmondmilktotal
                                );
                                setcoldoatmilktotal(
                                  (coldoatmilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                setcoldoatmilk(coldoatmilk + 1);
                                setcoldtotal(
                                  (coldoatmilkprice * 10000 * (coldoatmilk + 1)/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                  +coldskinnymilktotal+coldsoymilktotal+coldalmondmilktotal
                                );
                                setcoldoatmilktotal(
                                  (coldoatmilkprice * 10000 * (coldoatmilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>

                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                        <small>
                          <strong>With Soy Milk +$1</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (coldsoymilk > 0) {
                                  setcoldsoymilk(coldsoymilk - 1);
                                  setcoldtotal(
                                    (coldsoymilkprice * 10000 * (coldsoymilk - 1)/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                    +coldskinnymilktotal+coldoatmilktotal+coldalmondmilktotal
                                  );
                                  setcoldsoymilktotal(
                                    (coldsoymilkprice * 10000 * (coldsoymilk - 1)) / 10000
                                  );
                                } else {
                                  setcoldsoymilk(0);
                                  setcoldtotal(coldcoconutmilktotal+coldfreshmilktotal
                                    +coldskinnymilktotal+coldoatmilktotal+coldalmondmilktotal);
                                  setcoldsoymilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.coldsoymilk}
                              value={coldsoymilk}
                              className="form-control"
                              onChange={(e) => {
                                setcoldsoymilk("");
                                setcoldsoymilk(parseFloat(e.target.value));
                                settotal(
                                  (coldsoymilkprice * 10000 * e.target.value/10000) + coldcoconutmilktotal+coldfreshmilktotal
                                  +coldskinnymilktotal+coldoatmilktotal+coldalmondmilktotal
                                );
                                setcoldsoymilktotal(
                                  (coldsoymilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                setcoldsoymilk(coldsoymilk + 1);
                                setcoldtotal(
                                  (coldsoymilkprice * 10000 * (coldsoymilk + 1)/10000) + coldcoconutmilktotal+coldfreshmilktotal
                                  +coldskinnymilktotal+coldoatmilktotal+coldalmondmilktotal
                                );
                                setcoldsoymilktotal(
                                  (coldsoymilkprice * 10000 * (coldsoymilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>
                    </div>


                    <div className='d-flex flex-row col-12'>
                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                        <small>
                          <strong>With Almond Milk +$1</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (coldalmondmilk > 0) {
                                  setcoldalmondmilk(coldalmondmilk - 1);
                                  setcoldtotal(
                                    (coldalmondmilkprice * 10000 * (coldalmondmilk - 1)/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                    +coldskinnymilktotal+coldoatmilktotal+coldsoymilktotal
                                  );
                                  setcoldalmondmilktotal(
                                    (coldalmondmilkprice * 10000 * (coldalmondmilk - 1)) / 10000
                                  );
                                } else {
                                  setcoldalmondmilk(0);
                                  setcoldtotal(coldcoconutmilktotal+coldfreshmilktotal
                                    +coldskinnymilktotal+coldoatmilktotal+coldsoymilktotal);
                                  setcoldalmondmilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.coldalmondmilk}
                              value={coldalmondmilk}
                              className="form-control"
                              onChange={(e) => {
                                setcoldalmondmilk("");
                                setcoldalmondmilk(parseFloat(e.target.value));
                                setcoldtotal(
                                  (coldalmondmilkprice * 10000 * e.target.value/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                  +coldskinnymilktotal+coldoatmilktotal+coldsoymilktotal
                                );
                                setcoldalmondmilktotal(
                                  (coldalmondmilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                setcoldalmondmilk(coldalmondmilk + 1);
                                setcoldtotal(
                                  (coldalmondmilkprice * 10000 * (coldalmondmilk + 1)/10000) +coldcoconutmilktotal+coldfreshmilktotal
                                  +coldskinnymilktotal+coldoatmilktotal+coldsoymilktotal
                                );
                                setcoldalmondmilktotal(
                                  (coldalmondmilkprice * 10000 * (coldalmondmilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                        </div>
                      </div>

                      <div className="d-flex flex-column col-6 align-items-left justify-content-between mt-1 mb-3">
                        <small>
                          <strong>With Coconut Milk +$1</strong>{" "}
                        </small>
                        <div className="d-flex flex-row align-items-center mt-2">
                          <div className="d-flex flex-row stepper col-9">
                            <span
                              className={styles.inputnumberdecrement}
                              onClick={() => {
                                if (coldcoconutmilk > 0) {
                                  setcoldcoconutmilk(coldcoconutmilk - 1);
                                  setcoldtotal(
                                    (coldcoconutmilkprice * 10000 * (coldcoconutmilk - 1)/10000) +coldalmondmilktotal+coldfreshmilktotal
                                    +coldskinnymilktotal+coldoatmilktotal+coldsoymilktotal
                                  );
                                  setcoldcoconutmilktotal(
                                    (coldcoconutmilkprice * 10000 * (coldcoconutmilk - 1)) / 10000
                                  );
                                } else {
                                  setcoldcoconutmilk(0);
                                  setcoldtotal(coldalmondmilktotal+coldfreshmilktotal
                                    +coldskinnymilktotal+coldoatmilktotal+coldsoymilktotal);
                                  setcoldcoconutmilktotal(0);
                                }

                                // props.summary(summary=> [...summary, (price*10)*(hot+cold-1)/10])
                              }}
                            >
                              –
                            </span>
                            <input
                              type="number"
                              id={props.id}
                              name={props.coldcoconutmilk}
                              value={coldcoconutmilk}
                              className="form-control"
                              onChange={(e) => {
                                setcoldcoconutmilk("");
                                setcoldcoconutmilk(parseFloat(e.target.value));
                                setcoldtotal(
                                  (coldcoconutmilkprice * 10000 * e.target.value/10000) +coldalmondmilktotal+coldfreshmilktotal
                                  +coldskinnymilktotal+coldoatmilktotal+coldsoymilktotal
                                );
                                setcoldcoconutmilktotal(
                                  (coldcoconutmilkprice * 10000 * e.target.value) / 10000
                                );
                              }}
                            />
                            <span
                              className={styles.inputnumberincrement}
                              onClick={() => {
                                setcoldcoconutmilk(coldcoconutmilk + 1);
                                setcoldtotal(
                                  (coldcoconutmilkprice * 10000 * (coldcoconutmilk + 1)/10000) +coldalmondmilktotal+coldfreshmilktotal
                                  +coldskinnymilktotal+coldoatmilktotal+coldsoymilktotal
                                );
                                setcoldcoconutmilktotal(
                                  (coldcoconutmilkprice * 10000 * (coldcoconutmilk + 1)) / 10000
                                );
                                //  props.summary(summary=> [...summary, (price*10)*(hot+cold+1)/10])
                              }}
                            >
                              +
                            </span>
                          </div>

                          <div className="d-flex flex-row col-12  mt-1">
                            {/* <small className="text-secondary mx-2">
                              ${parseFloat(coldcoconutmilktotal).toFixed(2)}
                            </small> */}
                            <input
                              type="text"
                              style={{ display: "none" }}
                              name={props.coldtotal}
                              value={coldtotal}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                            <small className="text-secondary mt-1 mb-2">
                              ${parseFloat(coldfreshmilktotal+coldskinnymilktotal+coldoatmilktotal+coldalmondmilktotal+coldcoconutmilktotal+coldsoymilktotal).toFixed(2)}
                            </small>
                    </div>
                  ) : (
                    <></>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Milk);
