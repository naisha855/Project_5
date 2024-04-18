import React, { useEffect, useState } from "react"
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { addCount, removeCount, sortName, removeItem } from '../store'

const Cart = () => {
   let user = useSelector(state => state.user);
   let cart = useSelector(state => state.cart);
   let { name, age } = user;
   let dispatch = useDispatch()

   console.log(cart)

   function total() {
      let sum = 0;
      for (let v of cart) {
         sum += v.price * v.amount
      }
      
      return sum
   }
   let [shipping, setShipping] = useState(3000);
   useEffect(() => {
      
      function Shipping() {
         if (total() >= 50000) {
            setShipping(0);
         } else {
            setShipping(3000);
         }
      }
      Shipping();
   },[])

   
   return (
      <>
<Container>
         <Table>
            <thead>
               <tr >
                  <th>#</th>
                  <th>상품이미지</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>추가</th>
                  <th>감소</th>
               </tr>
            </thead>

            <tbody>
               {
                  cart.map((v, i) =>
                     <tr key={i}>
                        <td>{v.id}</td>
                        <td><img src={v.imgUrl} alt="" width='100px' /></td>
                        <td>{v.item}</td>
                        <td>{v.amount}</td>
                        <td><button onClick={() =>
                           dispatch(addCount(v.id))}>+</button></td>
                        <td><button onClick={() =>
                           dispatch(removeCount(v.id))}>-</button></td>
                     </tr>
                  )
               }
            </tbody>
         </Table>
         <button className="Sort_button" variant="outline-primary" onClick={() => {
            dispatch(sortName())
         }}>Sort by name</button>{''}
         <p>{total()}</p>
         </Container>
      </>
   );
};

export default Cart;
