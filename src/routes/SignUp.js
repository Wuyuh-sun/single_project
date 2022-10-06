import style from "../styles/Main/signup.module.css";

export default function SignUp() {
  return (
    <>
      <div className={style.wrap}>
        <h1>SIGNUP</h1>
        <form className={style.loginForm}>
          <label htmlFor="ID">ID</label>
          <input type="text" id="ID" name="ID" />
          <label htmlFor="PASSWORD">PASSWORD</label>
          <input type="password" id="PASSWORD" name="PASSWORD" />
          <label htmlFor="NAME">NAME</label>
          <input type="text" id="NAME" name="NAME" />
          <label htmlFor="PHONENUMBER">PHONENUMBER</label>
          <input type="text" id="PHONENUMBER" name="PHONENUMBER" />
          <input type="submit" onClick={(e)=>{
            e.preventDefault();
          }}/>
        </form>
      </div>
    </>
  );
}
