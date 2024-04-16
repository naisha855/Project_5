import { Table } from 'react-bootstrap'
import{ useDispatch, useSelector } from "react-redux"
import { addCount, sortName } from '../store'

function Cart() {
   let user = useSelector(state => state.user);
   let cart = useSelector(state => state.cart);
   let { name, age } = user;
   let dispatch = useDispatch()
   return (
      <>
         <h5>{name} {age}의 장바구니</h5>

         <Table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>상품이미지</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
               </tr>
            </thead>

            <tbody>
               {
                  cart.map((v, i) =>
                     <tr key={i}>
                        <td>{v.id}</td>
                        <td>{v.imgUrl}</td>
                        <td>{v.item}</td>
                        <td>{v.amount}</td>
                        <td><button onClick={()=>
                        dispatch(addCount(v.id))}>+</button></td>
                     </tr>
                  )
               }
            </tbody>
         </Table>
         <button className="Sort_button" variant="outline-primary" onClick={()=>{
            dispatch(sortName()) 
         }}>Sort by name</button>{''}
      </>
   );
};

export default Cart;
