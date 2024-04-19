import React, { useRef } from 'react'
import { Container, Form } from 'react-bootstrap';



const Login = () => {

    const pwref=useRef(null)
    const idref=useRef(null)

    
    function chkPW() {

        var em = idref.current.value;
        var pw = pwref.current.value;
        var em1 = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

        if (false === em1.test(em)){
            alert("이메일을 입력해주세요.");
            return false;
        }else if(pw.length < 8 || pw.length > 20) {
            alert("8자리~ 20자리 이내로 입력해주세요.");
            return false;
        } else if (pw.search(/\s/) != -1) {
            alert("비밀번호는 공백 없이 입력해주세요.");
            return false;
        } else if (num < 0 || eng < 0 || spe < 0) {
            alert("영문, 숫자, 특수문자를 혼합하여 입력해주세요.");
            return false;
        } else {
            alert("로그인 되었습니다.");
            return true
        }
    }

    return (
        <>
            <Container className='Login'>
                <h4>sign in</h4>
                <div className='Login_populate'>
                    <div className='Login_id'>
                        <h3>ID</h3>
                        <input type="text" ref={idref} defaultValue='' placeholder='이메일을 입력하세요.'/>
                    </div>
                    <div className='Login_paddword'>
                        <h3>password</h3>
                        <input type="password" ref={pwref} defaultValue='' placeholder='비밀번호를 입력하세요.'/>
                    </div>
                    <button onClick={chkPW}>sign Up</button>
                </div>
            </Container>
        </>
    )
}



export default Login
