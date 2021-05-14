import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productdetails } from "../../Actions/Product.action";
import { useHistory } from 'react-router-dom';
import {CartDet} from '../../Actions/Cart.action';
import { BsDash } from 'react-icons/bs';
import {BsPlus  } from 'react-icons/bs';
import CartDetails from '../Cart/CartDetails';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Productdetails.css';
toast.configure()

export default function Productdetails({ match }) {
	const [qty,setQty]=useState(1)
    const history=useHistory()
  let pdetails=match.params.pname
  console.log(pdetails);
 
  const DispatchMethod = useDispatch();
 
  const ProductCategory3 = useSelector((state) => state.Productdata);
  console.log(ProductCategory3);
  const product=ProductCategory3.Product_details

  useEffect(() => {
    DispatchMethod(productdetails(pdetails));
  }, [DispatchMethod]);
  
  const dec=()=>{
	if(qty>1){
	  setQty(qty-1)
	}
}

 const notify=()=>{
	toast.success('Product added to cart', {
		position: "top-right",
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		});
   }



//     function AddToCart(product){
// 	  let id = product.id;
// 	  let DataExist = CartDetails.find((e)=>(
// 		  e.id===id
// 	  ))
// 	  if(DataExist){
// 		  DispatchMethod()
// 	  }
// 	  console.log(id);
// 	DispatchMethod(CartDet(product));
// 	 history.push('/Cart')
// }
  
    
    return (
        <div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						   <div className="tab-pane active" id="pic-1"><img src={product.image} /></div>
						</div>
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{product.title}</h3>
						<div className="rating">
							<span className="review-no">{product.category}</span>
						</div>
						<p className="product-description">{product.description}</p>
						<div className='details__info'>
					<div className='details__incdec'>
					<span className='dec' onClick={dec}><BsDash/></span>
					<span className='qty'>{qty}</span>
					<span className='inc'onClick={()=>setQty(qty+1)}><BsPlus/></span>
					</div>
				</div>
						<h4 className="price">Current Price: <span>${product.price}</span></h4>
						<div className="action">
						<button className="add-to-cart btn btn-default"  onClick={() =>{
                     notify()
                    DispatchMethod({type:'ADD_TO_CART',payload:{product,qty}})
                  }
                } type="button">add to cart</button>
						<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
