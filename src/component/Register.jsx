import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Button } from 'react-bootstrap'

// REGEX :
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [EmailFocus, setEmailFocus] = useState(false);

  const [matchEmail, setMatchEmail] = useState('');
  const [validMatchEmail, setValidMatchEmail] = useState(false);
  const [matchEmailFocus, setMatchEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success,setSuccess] = useState(false);
  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
}, [user])

useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatchPwd(match);
}, [pwd, matchPwd])

useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
    const match = email === matchEmail;
    setValidMatchEmail(match);
}, [email, matchEmail])

useEffect(() => {
    setErrMsg('');
}, [user, pwd, matchPwd, email, matchEmail])

const handleSubmit = async (e) => {
    e.preventDefault();
    // if button submit enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
        setErrMsg("Invalid Entry");
        return;
    }
    console.log(user, pwd, email);
    setSuccess(true);
}
  return (
    <Container className='d-flex justify-content-center align-items-center h-100 w-100' bg="./background">
        <Form className='w-50 m-auto border border-2 border-dark p-4' onSubmit={handleSubmit}>
            <h1 className=''>Login :</h1>
            {/* -------------------------Username Input--------------------------- */}
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label className='text-bold'>
                <h3>Username :</h3>
                <span className={validName ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
                <span className={validName || !user ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
              </Form.Label>
              <Form.Control 
                type="text" 
                id="username"
                className='ml-4 input-form' 
                placeholder="Enter username" 
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <Form.Text id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </Form.Text>
            </Form.Group>
            {/* -------------------------Email Input--------------------------- */}
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label className='text-bold'>
                <h3>Email address :</h3>
                <span className={validEmail ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
                <span className={validEmail || !email ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
              </Form.Label>
              <Form.Control 
                type="text" 
                className='ml-4 input-form' 
                placeholder="Enter email" 
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <Form.Text className={EmailFocus && !validEmail ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Not accepted email !
              </Form.Text>
            </Form.Group>
            {/* -------------------------Email Confirm Input--------------------------- */}
            <Form.Group className="mb-3" controlId="CEmail">
              <Form.Label className='text-bold'>
                <h3>Confirm Email address :</h3>
                <span className={validMatchEmail && matchEmail ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
                <span className={validMatchEmail || !matchEmail ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
              </Form.Label>
              <Form.Control 
                type="email" 
                className='ml-4 input-form' 
                placeholder="Enter email"
                id="confirm_email"
                onChange={(e) => setMatchEmail(e.target.value)}
                required
                aria-invalid={validMatchEmail ? "false" : "true"}
                aria-describedby="confirmemailnote"
                onFocus={() => setMatchEmailFocus(true)}
                onBlur={() => setMatchEmailFocus(false)}
              />
              <Form.Text id="confirmemailnote" className={matchEmailFocus && !validMatchEmail ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first email input field.
              </Form.Text>
            </Form.Group>
            {/* -------------------------Password Input--------------------------- */}
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>
                <h3>Password :</h3>
                <span className={validPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
              </Form.Label>
              <Form.Control 
                type="password" 
                className='ml-4 input-form' 
                placeholder="Password" 
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <Form.Text id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters : 
                <span aria-label="exlamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </Form.Text>
            </Form.Group>
            {/* -------------------------Password Confirm Input--------------------------- */}
            <Form.Group className="mb-3" controlId="CPassword">
              <Form.Label>
                <h3>Confirm Password :</h3>
                <span className={validMatchPwd && matchPwd ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
                <span className={validMatchPwd || !matchPwd ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
              </Form.Label>
              <Form.Control 
                type="password"
                className='ml-4 input-form' 
                placeholder="Password" 
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatchPwd ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchPwdFocus(true)}
                onBlur={() => setMatchPwdFocus(false)}
              />
              <Form.Text id="confirmnote" className={matchPwdFocus && !validMatchPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </Form.Text>
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
        </Form>
    </Container>
  )
}

export default Register